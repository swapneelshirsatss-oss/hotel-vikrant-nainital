"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingConcierge from "@/components/FloatingConcierge";
import MobileStickyBar from "@/components/MobileStickyBar";
import BookingModal from "@/components/BookingModal";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultRoom, setDefaultRoom] = useState("deluxe-room");

  const openBookingModal = (roomId?: string) => {
    if (roomId) setDefaultRoom(roomId);
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header onOpenBookingModal={() => openBookingModal()} />
      <main className="flex-1 pb-16 sm:pb-0">{children}</main>
      <Footer />
      <FloatingConcierge onOpenBookingModal={() => openBookingModal()} />
      <MobileStickyBar onOpenBookingModal={() => openBookingModal()} />
      <BookingModal
        isOpen={isModalOpen}
        onClose={closeBookingModal}
        defaultRoomId={defaultRoom}
      />
    </>
  );
}
