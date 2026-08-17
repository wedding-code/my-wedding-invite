import React, { useState, useEffect, useRef } from 'react';
import Cover from './components/Cover';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Couple from './components/Couple';
import Event from './components/Event';
import Dresscode from './components/Dresscode';
import LoveStory from './components/LoveStory';
import Gift from './components/Gift';
import Wishes from './components/Wishes';
import BottomNav from './components/BottomNav';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollIndexRef = useRef(0);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const to =
      queryParams.get('to') ||
      queryParams.get('dear') ||
      queryParams.get('kepada');

    if (to) {
      setGuestName(to);
    }

    document.body.classList.add('locked');
  }, []);

  // =========================
  // CINEMATIC SECTION REVEAL
  // =========================
  useEffect(() => {
    if (!isOpen) return;

    const sections = document.querySelectorAll(
      '.page-section'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');

            // Tandai section aktif
            sections.forEach((section) => {
              section.classList.remove('section-current');
            });

            entry.target.classList.add('section-current');
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isOpen]);

  // =========================
  // AUTO PRESENTATION (6 DETIK)
  // =========================
  useEffect(() => {
    if (!isOpen) return;

    const sections = [
      '#home',
      '#quote',
      '#couple',
      '#event',
      '#dresscode',
      '#lovestory',
      '#gift',
      '#wish',
    ];

    const interval = setInterval(() => {
      scrollIndexRef.current =
        (scrollIndexRef.current + 1) % sections.length;

      const targetElement = document.querySelector(
        sections[scrollIndexRef.current]
      );

      if (!targetElement) return;

      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 4500); // Durasi 6 detik per perpindahan section

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
    document.body.classList.remove('locked');
  };

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="app-container">
      {!isOpen && (
        <Cover
          guestName={guestName}
          onOpen={handleOpenInvitation}
        />
      )}

      {isOpen && (
        <div className="main-content pb-24">

          <MusicPlayer
            isPlaying={isPlaying}
            toggleMusic={toggleMusic}
          />

          <div
            id="home"
            className="page-section"
          >
            <Hero />
          </div>

          <div
            id="quote"
            className="page-section"
          >
            <Quote />
          </div>

          <div
            id="couple"
            className="page-section"
          >
            <Couple />
          </div>

          <div
            id="event"
            className="page-section"
          >
            <Event />
          </div>

          <div
            id="dresscode"
            className="page-section"
          >
            <Dresscode />
          </div>

          <div
            id="lovestory"
            className="page-section"
          >
            <LoveStory />
          </div>

          <div
            id="gift"
            className="page-section"
          >
            <Gift />
          </div>

          <div
            id="wish"
            className="page-section"
          >
            <Wishes />
          </div>

          <BottomNav />

        </div>
      )}
    </div>
  );
}