import Images from "next/image"
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';



export default function Herosection5() {

    return (
        <div className="flex flex-col border w-[1535px] h-[882px] bg-white">
            <div className="flex w-[1322px] h-[91px] ml-[106.5px] pt-[16.5px] gap-7">
                <div className="flex w-[187px] h-[58px] ml-[136px] gap-[40px]">
                    <h1 className="flex w-[187px] h-[58px] my-3 text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1]">Bandage</h1>
                </div>
                <div className="flex w-[815px] h-[58px] ml-[41px] gap-36">
                    <div className="flex w-[275px] h-[24px] gap-[21px] my-[16.75px]">
                        <Link href="/" className="hover:text-gray-900">
                        <h1 className="w-[43px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Home</h1>
                        </Link>
                        <h1 className="w-[59px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Product</h1>
                        <Link href="/Pricing" className="hover:text-gray-900">
                        <h1 className="w-[52px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Pricing</h1>
                        </Link>
                        <h1 className="w-[58px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Contact</h1>
                    </div>
                    <div className="flex w-[300px] h-[52px] ml-[95px]">
                        <div className="flex w-[86px] h-[52px] py-[14px]">
                            <p className="flex w-[119px] h-[22px] text-[#23A6F0] font-bold text-[14px] leading-[24px] tracking-[0.2px]">Login</p>
                        </div>
                        <button className="flex w-[214px] h-[52px] px-[25px] py-[15px] gap-[15px] bg-[#23A6F0] rounded-[5px]">
                            <p className="flex w-[143px] h-[22px] text-white text-[14px] leading-[22px] tracking-[0.2px]">Become a member</p>
                            <p className="flex w-[12px] h-[10px] text-white"><ArrowRight /></p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex w-[1050px] h-[742px] mx-[242.5px] py-[112px] gap-[80px]">
                <div className="flex w-[1044px] h-[518px] mx-[3px]">
                    <div className="flex w-[599px] h-[518px] gap-[35px]">
                        <div className="flex flex-col w-[599px] h-[321px] gap-[35px]">
                            <h1 className="flex w-[108px] h-[24px] font-bold text-[#252B42] text-[16px] leading-[24px] tracking-[0.1px]">CONTACT US</h1>
                            <h1 className="flex w-[378px] h-[160px] font-bold text-[#252B42] text-[58px] leading-[80px] tracking-[0.2px]">Get in touch
                                today!</h1>
                            <p className="flex w-[376px] h-[60px] gap-[35px] text-[#737373] text-[20px] leading-[30px] tracking-[0.2px]">We know how large objects will act,
                                but things on a small scale</p>
                            <div className="flex flex-col w-[242px] h-[84px] gap-[20px]">
                                <p className="w-[248px] h-[32px] text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.2px]">Phone;+451 215 215 </p>
                                <p className="w-[210px] h-[32px] text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.2px]">Fax:+451 215 215</p>
                            </div>
                            <div className="flex w-[242px] h-[50px] px-[10px] py-[10px] gap-[34px]">
                                <h1 className="w-[30px] h-[24.5px] text-[#252B42]"><Twitter /></h1>
                                <h1 className="w-[30px] h-[30px] bg-[#252B42] text-white px-[5px] py-[3px]"><Facebook /></h1>
                                <h1 className="w-[30px] h-[30px] text-[#252B42]"><Instagram /></h1>
                                <h1 className="w-[30px] h-[30px] bg-[#252B42] text-white px-[3px] py-[3px]"><Linkedin /></h1>
                            </div>
                        </div>
                        <div className="flex w-[415px] h-[280px] my-[20.5px]">
                            <Images src="/CU1D.png" alt="Family with shoping" width={1050} height={668} className="absolute -ml-[520px] top-[10px] w-[1350px] h-[826px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}