import Images from "next/image"
import { ArrowRight } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Phone } from 'lucide-react';


export default function VisitOurOffice() {

    return (
        <main>
        <div className="flex flex-col w-[1535px] h-[814px]">
            <div className="flex flex-col w-[1050px] h-[841px] gap-[80px] py-[112px] mx-[242.5px] text-center">
                <div className="flex flex-col w-[633px] h-[134px] gap-[10px] mx-[208.5px] text-center">
                    <p className="mx-[246.5px] w-[132px] h-6 text-[#252B42] text-[14px] leading-[24px] tracking-[0.2px]">VISIT OUR OFFICE</p>
                    <p className="mx-[47px] w-[531px] h-[100px] text-[#252B42] text-[40px] leading-[50px] tracking-[0.2px]">We help small businesses 
                    with big ideas</p> 
                </div>
                <div className="flex w-[985px] h-[403px] mx-[32.5px]">
                    <div className="flex flex-col w-[327px] h-[343px] gap-[15px] my-[30px] px-[40px] py-[50px]">
                        <Images src="/CI.png" alt="Call Icon" width={72} height={72} className="mx-[88px] w-[72px] h-[72px]" />
                        <p className="mx-4 w-[216px] h-[48px] font-bold text-[#252B42] text-[14px] leading-[24px] tracking-[0.2px] text-center" >georgia.young@example.com <br />
                        georgia.young@ple.com</p>
                        <h1 className="mx-[74px] w-[100px] h-[24px] font-bold text-[#252B42] text-[16px] leading-[24px] tracking-[0.1px] text-center">Get Support</h1>
                        <button className="border border-[#23A6F0] rounded-[37px] px-9 py-[15px] mx-[29.5px] w-[189px] h-[54px] font-bold text-[#23A6F0] text-[14px] leading-[24px] tracking-[0.2px] text-center">Submit Request</button>
                    </div>
                    <div className="flex flex-col w-[329px] h-[403px] gap-[15px] px-[40px] py-[80px] bg-[#252B42]">
                        <Images src="/LI.png" alt="Call Icon" width={72} height={72} className="mx-[88px] w-[72px] h-[72px]" />
                        <p className="mx-4 w-[216px] h-[48px] font-bold text-white text-[14px] leading-[24px] tracking-[0.2px] text-center" >georgia.young@example.com <br />
                        georgia.young@ple.com</p>
                        <h1 className="mx-[74px] w-[100px] h-[24px] font-bold text-white text-[16px] leading-[24px] tracking-[0.1px] text-center">Get Support</h1>
                        <button className="border border-[#23A6F0] rounded-[37px] px-9 py-[15px] mx-[29.5px] w-[189px] h-[54px] font-bold text-[#23A6F0] text-[14px] leading-[24px] tracking-[0.2px] text-center">Submit Request</button>
                    </div>
                    <div className="flex flex-col w-[327px] h-[343px] gap-[15px] my-[30px] px-[40px] py-[50px]">
                        <Images src="/MI.png" alt="Call Icon" width={72} height={72} className="mx-[88px] w-[72px] h-[72px]" />
                        <p className="mx-4 w-[216px] h-[48px] font-bold text-[#252B42] text-[14px] leading-[24px] tracking-[0.2px] text-center" >georgia.young@example.com <br />
                        georgia.young@ple.com</p>
                        <h1 className="mx-[74px] w-[100px] h-[24px] font-bold text-[#252B42] text-[16px] leading-[24px] tracking-[0.1px] text-center">Get Support</h1>
                        <button className="border border-[#23A6F0] rounded-[37px] px-9 py-[15px] mx-[29.5px] w-[189px] h-[54px] font-bold text-[#23A6F0] text-[14px] leading-[24px] tracking-[0.2px] text-center">Submit Request</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-[1535px] h-[348px]">
            <div className="flex flex-col w-[1050px] h-[348px] mx-[242.5px] gap-[16px] py-[80px] px-[389px]">
                <p className="w-[239px] mx-[16.5px] h-6 text-[#252B42] text-[16px] leading-[24px] tracking-[0.2px] text-center">WE Can`&apos;`t WAIT TO MEET YOU</p>
                <h1 className="w-[270px] h-[80px] text-[#252B42] text-[58px] leading-[80px] tracking-[0.2px] text-center">Let`&apos;`s Talk</h1>
                <button className="w-[186px] mx-[50px] h-[52px] rounded-[5px] px-[40px] py-[15px] bg-[#23A6F0] text-white text-[14px] leading-[24px] tracking-[0.1px]">Try it free now</button>
            </div>
        </div>
        </main>
    )
}