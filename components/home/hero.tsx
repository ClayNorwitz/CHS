import styles from 'app/styles';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdArrowOutward } from 'react-icons/md';
import { TbBorderCornerSquare } from 'react-icons/tb';

export default function Hero() {
  return (
    <div className="bg-chs-gray h-screen">
      <div className={`${styles.boxWidth} h-full`}>
        <div className="relative flex h-full flex-col justify-center">
          <div className="-mb-16 flex justify-between">
            <h1 className={`${styles.h1} z-10`}>
              No more bad hair days <span className="block">Only salon-perfect results.</span>
            </h1>
            <TbBorderCornerSquare className="h-8 w-8 rotate-90" />
          </div>
          <div className="flex">
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex-1"></div>
              <div className="flex gap-x-10">
                <p className={`${styles.paragraph}`}>(About)</p>
                <p className={`${styles.h4} max-w-md`}>
                  Scelerisque non quam at blandit. Nunc ac leo ex. Pellentesque ornare ex sodales
                  velit egestas accumsan.
                </p>
              </div>
              <div className="flex flex-1 items-end">
                <div className="flex items-center gap-x-2">
                  <IoIosArrowBack className="h-8 w-8" />
                  <span className="bg-chs-dark-gray h-6 w-0.5"></span>
                  <IoIosArrowForward className="h-8 w-8" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Image
                  height={500}
                  width={850}
                  src="/img/hero-image-right.png"
                  alt="Picture of man in black and white"
                />
                <div className="absolute bottom-6 left-0 w-full px-6">
                  <div className="flex w-full justify-between border-b-2 border-black">
                    <p className="font-inter text-3xl font-semibold italic text-black">
                      Shop Davines
                    </p>
                    <MdArrowOutward className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
