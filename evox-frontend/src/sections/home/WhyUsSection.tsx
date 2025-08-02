"use client"

import { StrapiImage } from "@/components/StrapiImage";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface WhyUsSectionProps {
  whyUsSectionData?: {
    heading: string;
    description: string;
    image: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      url: string;
    };
    features: Array<{
      id: number;
      heading: string;
      description: string;
      icon: string
    }>;
    stats: Array<{
      id: number;
      value: string;
      label: string;
      targetValue: string;
    }>;
  } | null;
}

interface feautreData{
  id: number;
  heading: string;
  description: string
  icon: string

}

interface statsData{
  id: number;
  value:string;
  label:string;
  targetValue:number
}

interface AnimatedNumberProps {
  value: number
  duration?: number
}

const AnimatedNumber = ({ value, duration = 2000 }: AnimatedNumberProps) => {
  const [currentValue, setCurrentValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let start: number | null = null
    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percentage = Math.min(progress / duration, 1)
      setCurrentValue(Math.floor(percentage * value))
      if (percentage < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [value, duration])

  return <span ref={ref}>{currentValue}</span>
}

export default function WhyUsSection({ whyUsSectionData }: WhyUsSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it enters the viewport
    threshold: 0.2, // Trigger when 20% of the component is visible
  })
  if (!whyUsSectionData) {
    return null;
  }

  const featureData: feautreData[] = whyUsSectionData.features.map((data) => ({
    id: data.id,
    heading: data.heading,
    description: data.description,
    icon: data.icon
  }))

  const statsData: statsData[] = whyUsSectionData.stats.map((data)=>({
    id: data.id,
    value: data.value,
    label: data.label,
    targetValue: parseInt(data.targetValue)
  })
)


  return (
    <div className="bg-white sm:py-16 lg:py-24" ref={ref}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col-reverse sm:flex-row sm:gap-12 items-center">
          {/* Left Section: Text and Features */}
          <div className="space-y-12 sm:w-[60%]">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-semibold plus-jakarta-sans-semibold text-custom-black leading-tight">{whyUsSectionData?.heading}</h2>
              <p className="text-lg sm:text-2xl text-custom-black plus-jakarta-sans-medium leading-relaxed">{whyUsSectionData?.description}</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featureData.map((feature) => (
                <div key={feature.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <i className={`${feature.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold plus-jakarta-sans-bold text-custom-black mb-1">{feature.heading}</h3>{" "}
                    {/* Added feature title */}
                    <p className="text-base plus-jakarta-sans-regular text-custom-black leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Image with Statistics Overlay */}
          <div className="mb-8 sm:mb-0 relative rounded-lg overflow-hidden shadow-2xl">
            <StrapiImage
              src={whyUsSectionData.image.url || "/placeholder.svg"}
              alt={whyUsSectionData.image.alternativeText|| ""}
              className="w-[564px] h-[536px] object-cover"
              width={564}
              height={536}
            />
            {/* Statistics Overlay */}
            <div className="absolute bottom-8 w-[95%] left-0 right-0 bg-black bg-opacity-70 p-2 py-4 sm:p-6 rounded-br-lg rounded-tr-lg">
              <div className="grid grid-cols-3 sm:gap-6 text-center">
                {statsData.map((stat) => (
                  <div key={stat.id}>
                    <p className="text-xl sm:text-4xl mb-1 font-bold plus-jakarta-sans-bold text-white">
                      {inView ? <AnimatedNumber value={stat.targetValue} /> : 0}
                      {stat.value.includes("+") && "+"}
                    </p>
                    <p className="text-[10px] sm:text-sm sm:max-w-[120px] text-center plus-jakarta-sans-regular text-white">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
