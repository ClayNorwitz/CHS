import styles from 'app/styles';
import { TbBorderCornerSquare } from 'react-icons/tb';

export default function CollectionsSections() {
  return (
    <div className="bg-chs-gray relative">
      <div className="absolute bottom-0 left-0 h-20 w-full bg-white"></div>
      <div className={`${styles.boxWidth} relative`}>
        <div className="flex">
          <div className="w-2/5 flex-initial">
            <h2 className={`${styles.h1}`}>Collections.</h2>
            <div className="flex gap-x-10">
              <p className={`${styles.paragraph}`}>(Shop)</p>
              <p className={`${styles.paragraph} max-w-xs !text-lg`}>
                Scelerisque non quam at blandit. Nunc ac leo ex. Pellentesque ornare ex sodales
                velit egestas accumsan.
              </p>
            </div>
          </div>
          <div className="flex w-3/5 flex-initial gap-x-10">
            <div className="w-full bg-white p-8">
              <span className={`${styles.h1}`}>01.</span>
              <div className="mt-14 flex gap-x-10">
                <div className="flex items-end">
                  <TbBorderCornerSquare className="h-6 w-6 -rotate-90 text-black" />
                </div>

                <h3 className={`font-inter text-right text-5xl text-black`}>
                  Styling <span className="block">Products</span>
                </h3>
              </div>
            </div>
            <div className="w-full bg-black p-8">
              <span className={`${styles.h1} !text-white`}>02.</span>
              <div className="mt-14 flex gap-x-10">
                <div className="flex items-end">
                  <TbBorderCornerSquare className="h-6 w-6 -rotate-90 text-white" />
                </div>

                <h3 className={`font-inter text-right text-5xl text-white`}>
                  Styling <span className="block">Products</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
