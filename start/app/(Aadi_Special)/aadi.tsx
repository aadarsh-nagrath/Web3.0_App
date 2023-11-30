import Image from 'next/image';
import Hero from '../components/Hero-section/Hero';
import Productivity from '../components/Productivity/Productivity';
import Collaboration from '../components/Collaboration/Collaboration';
import Globe from '../components/Footer/Globe';

export default function Aadi() {
  
  return (
    <div className=' '>
      <div className='relative z-50'>
      </div>
      <div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <Image className='absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image' width='437' height='400' src="" alt="space-img" />
          </div>
          <div className='hero-section px-3 '>
            <Hero/>
          </div>
          <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Productivity/>
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Collaboration/>
          </div>
         <Globe/>
        </div>
      </div>
    </div>
  );
}
