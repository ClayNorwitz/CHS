import styles from 'app/styles';
import { TbBorderCornerSquare } from 'react-icons/tb';

export default function Hero() {
  return (
    <div className="bg-chs-gray h-screen">
      <div className={`${styles.boxWidth}`}>
        <div>
          <div className="flex justify-between">
            <h1 className={`${styles.h1}`}>
              No more bad hair days <span className="block">Only salon-perfect results.</span>
            </h1>
            <TbBorderCornerSquare className="h-8 w-8 rotate-90" />
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="flex gap-x-10">
                <p className={`${styles.paragraph}`}>(About)</p>
                <p className={`${styles.h4} max-w-md`}>
                  Scelerisque non quam at blandit. Nunc ac leo ex. Pellentesque ornare ex sodales
                  velit egestas accumsan.
                </p>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
