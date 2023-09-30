
import  Image  from "next/image";

import { links } from '@/constants';
import Link from 'next/link';
import { FaTimes} from "react-icons/fa"

const Drawer = ({state,handleSMenu}) => {

function handleClick(){
    handleSMenu();
}
  return (
    state && (
        <div className="absolute slideIn">
                    <div className={`absolute overflow-auto no-scroll lg:h-[652px] lg:w-[900px] min-w-[300px] text-white`}>
                    <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="flex flex-col gap-8 bg-primary">
                        <div className='flex flex-row justify-between'>
                          
                              <button className="group inline-flex p-4 z-10 outline-none" onClick={()=>handleClick()}>
      
                              <FaTimes className="text-[18px] lg:text-[22px]"/>
      
                              </button>
                               
                                  <Link href="#" className='flex rounded-bl-[50px] lg:rounded-bl-[50px] bg-white lg:px-[50px] lg:py-[30px] px-[16px] py-[10px] gap-3 items-center text-black'>
                                  <Image src="/login_btn.png" alt="phone" width={24} height={24} className='w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]'/>
                                  <p className='text-black text-[12px] lg:text-[16px] font-bold'>Login</p>
                                  </Link>
                               
                        </div>
                        <div className='flex flex-col lg:flex-row gap-3'>
                           <div className='lg:mt-[-90px] lg:ms-[90px] ms-[45px]'>
                              <p className='text-xl lg:text-3xl font-bold'>API features</p>
                              <div className='w-1/2 lg:w-[100%] mt-2 lg:mt-0 h-[1px] bg-white'/>
      
                              <div className='flex flex-col gap-2 mt-[30px]'>
                                  {
                                      links.apiFeatures.map((item)=>(
                                          <Link href={item.url} key={item.name} className='text-md lg:text-xl font-bold'>{item.name}</Link>
                                      ))
                                  }
                                  <div className='my-[30px] lg:block hidden'>
                                      <Link href="#" className='text-md lg:text-xl font-bold'>START A FREE TRAIL</Link>
                                  </div>
                              </div>
                           </div>
                           <div>
                           <div className='lg:mt-[-90px] mt-[30px] lg:ms-[90px] ms-[45px] z-10'>
                              <p className='text-xl lg:text-3xl font-bold'>Pricing</p>
                              <div className='w-1/2 lg:w-[100%] mt-2 lg:mt-0 h-[1px] bg-white'/>
      
                              <div className='flex flex-col gap-2 mt-[30px]'>
                                  {
                                      links.prices.map((item)=>(
                                          <Link href={item.url} key={item.name} className='text-md lg:text-xl font-bold'>{item.name}</Link>
                                      ))
                                  }
                                  <div className='my-[30px] flex flex-col gap-1'>
                                      <Link href="#" className='lg:text-xl font-bold text-medium'>Customer stories</Link>
                                      <Link href="#" className='lg:text-xl font-bold text-medium'>Help & support</Link>
                                  </div>
                                  <div className='block lg:hidden mb-[30px]'>
                                    <p className='text-xl font-bold'>START A FREE TRAIL</p>
                                </div>
                              </div>
                           </div>
                           </div>
                        </div>
                      </div>
                   
                    </div>
                  </div>
                
            
      
    </div>
    )
  )
}

export default Drawer;