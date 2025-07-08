"use client";

import { useState } from "react";

const LiveSupportWidget = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [isChatVisible, setIsChatVisible] = useState(true);

  // Extract video ID from the provided YouTube link
  const videoId = "EMZGO7a8ngQ";

  // For the embed domain, you'll need to replace this with your actual domain
  const embedDomain = "emotion.rohittech.in"; // Your actual domain

  const toggleVideo = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div className="fixed z-50 bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-200 md:block">
      {/* Mobile version - full width at bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="p-4">
          {/* Header with toggle buttons */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-gray-800">🔴 Live Support</h3>
            <div className="flex gap-2">
              <button
                onClick={toggleVideo}
                className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md transition-colors"
                aria-label={
                  isVideoVisible ? "Close Live Preview" : "Open Live Video"
                }
              >
                {isVideoVisible ? "Close Video" : "Open Video"}
              </button>
              <button
                onClick={toggleChat}
                className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md transition-colors"
                aria-label={isChatVisible ? "Close Chat" : "Open Chat"}
              >
                {isChatVisible ? "Close Chat" : "Open Chat"}
              </button>
            </div>
          </div>

          {/* Video iframe - conditionally rendered */}
          {isVideoVisible && (
            <div className="mb-3">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                width="100%"
                height="180"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              />
            </div>
          )}

          {/* Chat iframe - conditionally rendered */}
          {isChatVisible && (
            <div>
              <iframe
                src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${embedDomain}`}
                width="100%"
                height="250"
                frameBorder="0"
                className="rounded-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Desktop version - bottom right corner */}
      <div className="hidden md:block">
        {/* Header with toggle buttons */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">🔴 Live Support</h3>
          <div className="flex gap-2">
            <button
              onClick={toggleVideo}
              className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md transition-colors"
              aria-label={
                isVideoVisible ? "Close Live Preview" : "Open Live Video"
              }
            >
              {isVideoVisible ? "Close Video" : "Open Video"}
            </button>
            <button
              onClick={toggleChat}
              className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md transition-colors"
              aria-label={isChatVisible ? "Close Chat" : "Open Chat"}
            >
              {isChatVisible ? "Close Chat" : "Open Chat"}
            </button>
          </div>
        </div>

        {/* Video iframe - conditionally rendered */}
        {isVideoVisible && (
          <div className="p-4 pb-2">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              width="100%"
              height="180"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            />
          </div>
        )}

        {/* Chat iframe - conditionally rendered */}
        {isChatVisible && (
          <div className="px-4 pb-4">
            <iframe
              src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${embedDomain}`}
              width="100%"
              height="250"
              frameBorder="0"
              className="rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveSupportWidget;
