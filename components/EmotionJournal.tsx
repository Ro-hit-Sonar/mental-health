"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Trash2, Edit2, Save, X, Download } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jsPDF from "jspdf";

interface JournalEntry {
  id: string;
  date: string;
  emotion: string;
  note: string;
}

const emotions = [
  "Happy",
  "Sad",
  "Angry",
  "Fearful",
  "Surprised",
  "Disgusted",
  "Playful",
  "Content",
  "Interested",
  "Proud",
  "Accepted",
  "Powerful",
  "Peaceful",
  "Trusting",
  "Optimistic",
];

const EmotionJournal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [editingEntry, setEditingEntry] = useState<string | null>(null);

  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem("emotionJournal");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("emotionJournal", JSON.stringify(entries));
  }, [entries]);

  // Helper to format date as YYYY-MM-DD
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEmotion || !selectedDate) return;

    if (editingEntry) {
      setEntries(
        entries.map((entry) =>
          entry.id === editingEntry
            ? {
                ...entry,
                date: formatDate(selectedDate),
                emotion: selectedEmotion,
                note,
              }
            : entry
        )
      );
      setEditingEntry(null);
    } else {
      const newEntry: JournalEntry = {
        id: Date.now().toString(),
        date: formatDate(selectedDate),
        emotion: selectedEmotion,
        note,
      };
      setEntries([...entries, newEntry]);
    }
    setSelectedEmotion("");
    setNote("");
  };

  const handleEdit = (entry: JournalEntry) => {
    setEditingEntry(entry.id);
    setSelectedDate(new Date(entry.date));
    setSelectedEmotion(entry.emotion);
    setNote(entry.note);
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleCancel = () => {
    setEditingEntry(null);
    setSelectedEmotion("");
    setNote("");
  };

  const handleDownload = () => {
    // Debug log to check entries
    console.log("Journal entries:", entries);

    // Create a new PDF document
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(24);
    doc.setTextColor(255, 105, 180); // Pink color
    doc.text("Emotion Journal", 20, 20);

    // Add date
    doc.setFontSize(12);
    doc.setTextColor(128, 128, 128); // Gray color
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);

    // Add entries
    let yPosition = 50;
    entries
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .forEach((entry) => {
        // Debug log for each entry
        console.log("Processing entry:", entry);

        // Add emotion and date
        doc.setFontSize(16);
        doc.setTextColor(255, 105, 180); // Pink color
        doc.text(`${entry.emotion}`, 20, yPosition);

        doc.setFontSize(12);
        doc.setTextColor(128, 128, 128); // Gray color
        doc.text(new Date(entry.date).toLocaleDateString(), 20, yPosition + 7);

        // Add note if exists
        if (entry.note) {
          console.log("Note content:", entry.note);

          doc.setFontSize(12);
          doc.setTextColor(0, 0, 0); // Black color for better visibility

          // Split note into multiple lines if too long
          const splitNote = doc.splitTextToSize(entry.note, 170);
          console.log("Split note:", splitNote);

          doc.text(splitNote, 20, yPosition + 15);
          yPosition += 15 + splitNote.length * 7;
        } else {
          yPosition += 15;
        }

        // Add separator line
        doc.setDrawColor(255, 105, 180); // Pink color
        doc.line(20, yPosition + 5, 190, yPosition + 5);

        yPosition += 20;

        // Add new page if needed
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
      });

    // Save the PDF
    doc.save(`emotion-journal-${new Date().toISOString().split("T")[0]}.pdf`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 rounded-xl p-6 mb-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-pink-500" />
          {editingEntry ? "Edit Entry" : "New Journal Entry"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Date</label>
              <div className="relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  calendarClassName="!bg-gray-900 !border-pink-500 !text-white"
                  dayClassName={() =>
                    "!bg-gray-900 !text-white hover:!bg-pink-500/20"
                  }
                  popperClassName="z-50"
                  showPopperArrow={false}
                />
                <Calendar className="w-5 h-5 text-pink-500 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Emotion</label>
              <select
                value={selectedEmotion}
                onChange={(e) => setSelectedEmotion(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select an emotion</option>
                {emotions.map((emotion) => (
                  <option key={emotion} value={emotion}>
                    {emotion}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Note</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"
              placeholder="How are you feeling today?"
            />
          </div>
          <div className="flex justify-end space-x-4">
            {editingEntry && (
              <button
                type="button"
                onClick={handleCancel}
                className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5 mr-2" />
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
            >
              {editingEntry ? (
                <>
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5 mr-2" />
                  Add Entry
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Your Emotion Timeline
          </h2>
          {entries.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleDownload}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Journal
            </motion.button>
          )}
        </div>
        {entries.length === 0 ? (
          <p className="text-gray-400 text-center py-8">
            No entries yet. Start by adding your first emotion journal entry!
          </p>
        ) : (
          entries
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((entry) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-900 rounded-xl p-6 shadow-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {entry.emotion}
                    </h3>
                    <p className="text-gray-400">
                      {new Date(entry.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(entry)}
                      className="p-2 text-gray-400 hover:text-pink-500 transition-colors"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {entry.note && <p className="text-gray-300">{entry.note}</p>}
              </motion.div>
            ))
        )}
      </motion.div>
    </div>
  );
};

export default EmotionJournal;
