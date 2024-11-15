import styles from 'app/styles';
import { MdArrowOutward } from 'react-icons/md';

export default function ProductGrid() {
  return (
    <div className="border-chs-dark-gray grid h-56 grid-cols-5 border-b border-t bg-white">
      <div className="border-chs-dark-gray col-span-1 flex flex-col justify-between border-r p-10">
        <div>
          <h2 className={`${styles.h2} !mb-0`}>Healthy hair</h2>
          <p className={`${styles.paragraph}`}>(Hair type)</p>
        </div>
        <button className="group flex items-center justify-between">
          <p
            className={`${styles.paragraph} !text-xl transition-all duration-200 ease-in group-hover:underline`}
          >
            View products
          </p>
          <MdArrowOutward className="h-8 w-8 rounded-full p-1 text-black transition-all duration-200 ease-in group-hover:bg-black group-hover:text-white" />
        </button>
      </div>
      <div className="border-chs-dark-gray col-span-1 flex flex-col justify-between border-r p-10">
        <div>
          <h2 className={`${styles.h2} !mb-0`}>Hair loss</h2>
          <p className={`${styles.paragraph}`}>(Hair type)</p>
        </div>
        <button className="group flex items-center justify-between">
          <p
            className={`${styles.paragraph} !text-xl transition-all duration-200 ease-in group-hover:underline`}
          >
            View products
          </p>
          <MdArrowOutward className="h-8 w-8 rounded-full p-1 text-black transition-all duration-200 ease-in group-hover:bg-black group-hover:text-white" />
        </button>
      </div>
      <div className="border-chs-dark-gray col-span-1 flex flex-col justify-between border-r p-10">
        <div>
          <h2 className={`${styles.h2} !mb-0`}>Dandruff</h2>
          <p className={`${styles.paragraph}`}>(Hair type)</p>
        </div>
        <button className="group flex items-center justify-between">
          <p
            className={`${styles.paragraph} !text-xl transition-all duration-200 ease-in group-hover:underline`}
          >
            View products
          </p>
          <MdArrowOutward className="h-8 w-8 rounded-full p-1 text-black transition-all duration-200 ease-in group-hover:bg-black group-hover:text-white" />
        </button>
      </div>
      <div className="border-chs-dark-gray col-span-1 flex flex-col justify-between border-r p-10">
        <div>
          <h2 className={`${styles.h2} !mb-0`}>Oily hair</h2>
          <p className={`${styles.paragraph}`}>(Hair type)</p>
        </div>
        <button className="group flex items-center justify-between">
          <p
            className={`${styles.paragraph} !text-xl transition-all duration-200 ease-in group-hover:underline`}
          >
            View products
          </p>
          <MdArrowOutward className="h-8 w-8 rounded-full p-1 text-black transition-all duration-200 ease-in group-hover:bg-black group-hover:text-white" />
        </button>
      </div>
      <div className="col-span-1 flex flex-col justify-between p-10">
        <div>
          <h2 className={`${styles.h2} !mb-0`}>Curly hair</h2>
          <p className={`${styles.paragraph}`}>(Hair type)</p>
        </div>
        <button className="group flex items-center justify-between">
          <p
            className={`${styles.paragraph} !text-xl transition-all duration-200 ease-in group-hover:underline`}
          >
            View products
          </p>
          <MdArrowOutward className="h-8 w-8 rounded-full p-1 text-black transition-all duration-200 ease-in group-hover:bg-black group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
