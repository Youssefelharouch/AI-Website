"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel"

const workItems = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A cutting-edge web application for data visualization",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Beta Mobile App",
    description: "An innovative mobile app for health and fitness tracking",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Gamma E-commerce Platform",
    description: "A robust and scalable e-commerce solution",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Delta AI Assistant",
    description: "An intelligent AI-powered virtual assistant",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function WorkSlider() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {workItems.map((item) => (
              <CarouselItem key={item.id}>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}