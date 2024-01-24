import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function P1c4() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
      <Carousel className="w-full max-w-lg">
        <CarouselContent>

              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                     <div className="text-center">
                       <div className="text-xl font-semibold mb-1">Płyta nr 1</div>
                       <div className="mb-1">Ćwiczenie nr 4</div>
                       <div className="mb-5">Utwór nr 1</div>
                       <audio controls controlsList="nodownload">
                         <source src="/mp3/p1/_04/_04_01.mp3" type="audio/mp3"/>
                       </audio>
                     </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-xl font-semibold mb-1">Płyta nr 1</div>
                      <div className="mb-1">Ćwiczenie nr 4</div>
                      <div className="mb-5">Utwór nr 2</div>
                      <audio controls controlsList="nodownload">
                        <source src="/mp3/p1/_04/_04_02.mp3" type="audio/mp3"/>
                      </audio>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-xl font-semibold mb-1">Płyta nr 1</div>
                    <div className="mb-1">Ćwiczenie nr 4</div>
                    <div className="mb-5">Utwór nr 3</div>
                    <audio controls controlsList="nodownload">
                      <source src="/mp3/p1/_04/_04_03.mp3" type="audio/mp3"/>
                    </audio>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    </div>
  );
}