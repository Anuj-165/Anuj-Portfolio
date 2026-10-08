import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';



/* -------------------------------------------------------------------------- */
/* FinPilot                                                                   */
/* -------------------------------------------------------------------------- */

import finpilotMain from '@/assets/FinPilot/FinPilot.png';
import finpilotDashboard from '@/assets/FinPilot/FinPilot_Dashboard.png';
import finpilotInsights from '@/assets/FinPilot/FinPilot_Insights.png';

/* -------------------------------------------------------------------------- */
/* Sakhi                                                                      */
/* -------------------------------------------------------------------------- */

import sakhiMain from '@/assets/Sakhi/Sakhi.png';
import sakhiChat from '@/assets/Sakhi/Sakhi chat.png';
import sakhiEducation from '@/assets/Sakhi/Sakhi Education.png';
import sakhiSignup from '@/assets/Sakhi/Sakhi signup.png';
import sakhiStory from '@/assets/Sakhi/Sakhi Story.png';
import sakhiPeriodTracker from '@/assets/Sakhi/Sakhi_PeriodTracker.png';
import sakhiPeriodTrackerAlt from '@/assets/Sakhi/Sakhi_pt.png';
import sakhiStoryResult from '@/assets/Sakhi/Sakhi_StoryResult.png';

/* -------------------------------------------------------------------------- */
/* TradeXpert                                                                 */
/* -------------------------------------------------------------------------- */

import tradeXpertMain from '@/assets/TradeXpert/TradeXpert.png';
import tradeXpertPortfolio from '@/assets/TradeXpert/TradeXpert Portfolio.png';
import tradeXpertSearch from '@/assets/TradeXpert/TradeXpert Search.png';
import tradeXpertSimulator from '@/assets/TradeXpert/TradeXpert Simulator.png';
import tradeXpertStockCondition from '@/assets/TradeXpert/TradeXpert StockCondition.png';
import tradeXpertStocks from '@/assets/TradeXpert/TradeXpert Stocks.png';
import tradeXpertPrediction from '@/assets/TradeXpert/Stock Predicition.png';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectPreviewProps {
  type: string;
}

/* -------------------------------------------------------------------------- */
/* Shared Image Gallery                                                       */
/* -------------------------------------------------------------------------- */

function ProjectImageGallery({
  images,
  accent = 'green',
}: {
  images: ProjectImage[];
  accent?: 'green' | 'rose' | 'purple';
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const activeImage = images[activeIndex];

  const accentClasses = {
    green: {
      button:
        'hover:bg-[#43D17A]/10 hover:text-[#43D17A] hover:border-[#43D17A]/30',
      indicator: 'bg-[#43D17A]',
      border: 'border-[#43D17A]/20',
    },
    rose: {
      button:
        'hover:bg-[#ec4899]/10 hover:text-[#ec4899] hover:border-[#ec4899]/30',
      indicator: 'bg-[#ec4899]',
      border: 'border-[#ec4899]/20',
    },
    purple: {
      button:
        'hover:bg-[#a78bfa]/10 hover:text-[#a78bfa] hover:border-[#a78bfa]/30',
      indicator: 'bg-[#a78bfa]',
      border: 'border-[#a78bfa]/20',
    },
  };

  const colors = accentClasses[accent];

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <>
      <div className="relative w-full h-full overflow-hidden bg-black">
        {/* Main screenshot */}
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Subtle readability overlay */}
        <div className="absolute inset-0 bg-black/[0.04] pointer-events-none" />

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 z-10 rounded-full border border-white/10 bg-black/55 backdrop-blur-md px-2.5 py-1">
            <span className="text-[8px] font-medium tracking-wider text-white/70">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </span>
          </div>
        )}

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous project screenshot"
              className={`absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/60 backdrop-blur-md transition ${colors.button}`}
            >
              <ChevronLeft size={13} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next project screenshot"
              className={`absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/60 backdrop-blur-md transition ${colors.button}`}
            >
              <ChevronRight size={13} />
            </button>
          </>
        )}

        {/* Expand */}
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          aria-label="View project screenshot"
          className={`absolute bottom-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/60 backdrop-blur-md transition ${colors.button}`}
        >
          <Maximize2 size={11} />
        </button>

        {/* Pagination dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1.5 backdrop-blur-md">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View screenshot ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex
                    ? `w-4 ${colors.indicator}`
                    : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen-style modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative max-h-[92vh] max-w-[95vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[92vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            />

            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/80 backdrop-blur-md transition hover:bg-white/10"
              aria-label="Close image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* FinPilot Preview                                                           */
/* -------------------------------------------------------------------------- */

function FinPilotPreview() {
  const images: ProjectImage[] = [
    {
      src: finpilotMain,
      alt: 'FinPilot application',
    },
    {
      src: finpilotDashboard,
      alt: 'FinPilot financial dashboard',
    },
    {
      src: finpilotInsights,
      alt: 'FinPilot financial insights',
    },
  ];

  return <ProjectImageGallery images={images} accent="green" />;
}

/* -------------------------------------------------------------------------- */
/* Sakhi Preview                                                              */
/* -------------------------------------------------------------------------- */

function SakhiPreview() {
  const images: ProjectImage[] = [
    {
      src: sakhiMain,
      alt: 'Sakhi health and safety companion',
    },
    {
      src: sakhiChat,
      alt: 'Sakhi AI health assistant',
    },
    {
      src: sakhiEducation,
      alt: 'Sakhi education section',
    },
    {
      src: sakhiPeriodTracker,
      alt: 'Sakhi period tracker',
    },
    {
      src: sakhiPeriodTrackerAlt,
      alt: 'Sakhi menstrual tracking interface',
    },
    {
      src: sakhiStory,
      alt: 'Sakhi community story interface',
    },
    {
      src: sakhiStoryResult,
      alt: 'Sakhi story result interface',
    },
    {
      src: sakhiSignup,
      alt: 'Sakhi authentication interface',
    },
  ];

  return <ProjectImageGallery images={images} accent="rose" />;
}

/* -------------------------------------------------------------------------- */
/* TradeXpert Preview                                                         */
/* -------------------------------------------------------------------------- */

function TradeXpertPreview() {
  const images: ProjectImage[] = [
    {
      src: tradeXpertMain,
      alt: 'TradeXpert stock analysis platform',
    },
    {
      src: tradeXpertStocks,
      alt: 'TradeXpert stocks dashboard',
    },
    {
      src: tradeXpertSearch,
      alt: 'TradeXpert stock search',
    },
    {
      src: tradeXpertStockCondition,
      alt: 'TradeXpert stock condition analysis',
    },
    {
      src: tradeXpertPortfolio,
      alt: 'TradeXpert portfolio',
    },
    {
      src: tradeXpertSimulator,
      alt: 'TradeXpert trading simulator',
    },
    {
      src: tradeXpertPrediction,
      alt: 'TradeXpert stock prediction',
    },
  ];

  return <ProjectImageGallery images={images} accent="purple" />;
}

/* -------------------------------------------------------------------------- */
/* Main Project Preview                                                       */
/* -------------------------------------------------------------------------- */

export function ProjectPreview({ type }: ProjectPreviewProps) {
  switch (type) {
    case 'finpilot':
      return <FinPilotPreview />;

    case 'sakhi':
      return <SakhiPreview />;

    case 'trader-expert':
      return <TradeXpertPreview />;

    default:
      return null;
  }
}