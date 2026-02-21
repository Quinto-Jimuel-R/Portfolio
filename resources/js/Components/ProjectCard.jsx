import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectCard({ images, title, description }) {
    const [open, setOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + images.length) % images.length);
    };

    // Add small delay to trigger transition
    useEffect(() => {
        if (open) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [open]);

    return (
        <>
            {/* CARD */}
            <div
                className="relative overflow-hidden rounded-md group cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <img
                    src={images[0]}
                    alt={title}
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-105 group-hover:blur-sm border border-gray-300 rounded-md"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                        See More
                    </span>
                </div>
            </div>

            {/* MODAL */}
            {open &&
                createPortal(
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4"
                        onClick={() => setOpen(false)}
                    >
                        <div
                            className={`bg-white rounded-xl p-6 max-w-5xl w-full max-h-[90vh] overflow-auto relative transform transition-all duration-500 ${showModal
                                    ? "translate-y-0 opacity-100"
                                    : "-translate-y-20 opacity-0"
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl hover:cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                ✕
                            </button>

                            <h2 className="text-2xl font-bold mb-2">{title}</h2>
                            <p className="text-gray-600 mb-4">{description}</p>

                            {/* Carousel */}
                            <div className="relative flex items-center justify-center">
                                <img
                                    src={images[activeImage]}
                                    alt={`${title} ${activeImage + 1}`}
                                    className="w-full max-h-[70vh] object-contain rounded"
                                />

                                {images.length > 1 && (
                                    <>
                                        <button
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black/50 hover:cursor-pointer"
                                            onClick={prevImage}
                                        >
                                            <i className="fa-solid fa-angle-left text-sm"></i>
                                        </button>
                                        <button
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black/50 hover:cursor-pointer"
                                            onClick={nextImage}
                                        >
                                            <i className="fa-solid fa-angle-right text-sm"></i>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}