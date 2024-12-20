import Images from "next/image"
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Check } from 'lucide-react';


export default function HeroSection4() {

    return (
        <div className="flex flex-col w-[1535px] h-[1162px] bg-[#FAFAFA]">
            <div className="flex flex-col w-[1050px] h-[1600px] py-[112px] gap-12 mx-[242.5px]">
                <div className="flex w-[1050px] h-[91px] pt-[16.5px] gap-7 bg-white">
                    <div className="flex w-[187px] h-[58px] gap-[40px]">
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
                            <Link href="/Contact" className="hover:text-gray-900">
                            <h1 className="w-[58px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Contact</h1>
                            </Link>
                        </div>
                        <div className="flex w-[300px] h-[52px] ml-[72px] my-[3px]">
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
                <div className="flex flex-col  w-[1050px] h-[280px] px-[90px] bg-white">
                    <div className="flex flex-col w-[870px] h-[280px] bg-white py-[50px] gap-4 text-center">
                        <h1 className="flex w-[71px] h-[24px] text-[16px] mx-[399.5px] text-[#737373] leading-[24px] tracking-[0.1px]">PRICING</h1>
                        <h2 className="flex w-[427px] h-[80px] text-[58px] mx-[221.5px] text-[#737373] leading-[80px] tracking-[0.2px]">Simple Pricing</h2>
                        <div className="flex w-[134px] h-[44px] mx-[368px] gap-[15px] py-[10px]">
                            <p className="flex w-[43px] h-[24px] text-[14px] font-bold text-[#252B42] leading-[24px] tracking-[0.2px]">Home</p>
                            <p className="flex w-[9px] h-[16px] text-[#BDBDBD]"><ChevronRight /></p>
                            <p className="flex w-[52px] h-[24px] text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]">Pricing</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[633px] h-[100px] mx-[212.5px] gap-[10px]">
                    <h1 className="flex w-[144px] h-[50px] text-[40px] font-bold text-[#252B42] leading-[50px] mx-[240.5px] tracking-[0.2px]">pricing</h1>
                    <p className="flex w-[469px] h-[40px] text-[14px] mx-[78px] text-center font-bold text-[#737373] leading-[20px] tracking-[0.2px]">Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex w-[311px] h-[44px] mx-[369.5px] gap-[16px]">
                    <div className="flex w-[186px] h-[28px] gap-[16px] my-[8px] text-center">
                        <p className="flex w-[68px] h-[24px] text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">Monthly</p>
                        <Images src="/Check-sign.png" alt="check sign" width={45} height={25} className="w-[45px] h-[25px] -ml-3" />
                        <p className="flex w-[51px] h-[24px] text-[16px] font-bold text-[#252B42] -ml-3 leading-[24px] tracking-[0.1px]">Yearly</p>
                    </div>
                    <div className="flex w-[109px] h-[44px] text-[13px] rounded-[37px] font-bold text-[#23A6F0] bg-[#B2E3FF] px-[20px] py-[10px] leading-[24px] tracking-[0.2px]">Save 25%
                    </div>
                </div>
                <div className="relative flex w-[985px] -mt-[15px] h-[704px] mx-[32.5px]">
                    <div className="flex flex-col border border-[#23A6F0] rounded-[10px] bg-white w-[327px] h-[664px] gap-[35px] px-[40px] py-[50px] mt-[40px]">
                        <h1 className="flex w-[66px] h-[32px] text-[24px] font-bold text-[#252B42] mx-[90.5px] leading-[32px] tracking-[0.2px]">FREE</h1>
                        <h1 className="flex w-[160px] h-[48px] text-[16px] font-bold text-center text-[#737373] mx-[43.5px] leading-[24px] tracking-[0.1px]">Organize across all
                            apps by hand</h1>
                        <div className="flex w-[114px] h-[56px] mx-[66.5px] gap-[10px]">
                            <h1 className="flex w-[28px] h-[50px] text-[40px] font-bold text-[#23A6F0] my-[3px] leading-[50px] tracking-[0.2px]">0</h1>
                            <div className="flex flex-col w-[76px] h-[56px]">
                                <h1 className="flex w-[16px] h-[32px] text-[24px] font-bold text-[#23A6F0] leading-[32px] tracking-[0.1px]">$</h1>
                                <h1 className="flex w-[79px] h-[24px] text-[14px] font-bold text-[#8EC2F2] leading-[24px] tracking-[0.2px]">Per Month</h1>
                            </div>

                        </div>
                        <div className="flex flex-col w-[247px] h-[236px]">
                            <div className="flex w-[247px] h-[32px] gap-[10px]">
                                <h1 className="flex w-[32px] h-[32px] px-1 py-1 rounded-full bg-[#2DC071] text-white"><Check /></h1>
                                <p className="flex w-[205px] h-[29.25px] text-[14px] font-bold text-[#252B42] leading-[24px] tracking-[0.2px]">Unlimited product updates</p>
                            </div>

                        </div>

                    </div>
                    <div className="flex flex-col border border-[#23A6F0] rounded-[10px] bg-[#252B42] w-[329px] h-[704px] gap-[35px] px-[40px] py-[70px]">
                        <h1 className="flex w-[139px] h-[32px] text-[24px] font-bold text-white mx-[54px] leading-[32px] tracking-[0.2px]">STANDARD</h1>
                        <h1 className="flex w-[160px] h-[48px] text-[16px] font-bold text-center text-white mx-[43.5px] leading-[24px] tracking-[0.1px]">Organize across all
                            apps by hand</h1>
                        <div className="flex w-[174px] h-[56px] mx-[36.5px] gap-[10px]">
                            <h1 className="flex w-[88px] h-[50px] text-[40px] font-bold text-[#23A6F0] my-[3px] leading-[50px] tracking-[0.2px]">9.99</h1>
                            <div className="flex flex-col w-[76px] h-[56px]">
                                <h1 className="flex w-[16px] h-[32px] text-[24px] font-bold text-[#23A6F0] leading-[32px] tracking-[0.1px]">$</h1>
                                <h1 className="flex w-[79px] h-[24px] text-[14px] font-bold text-[#8EC2F2] leading-[24px] tracking-[0.2px]">Per Month</h1>
                            </div>

                        </div>
                        <div className="flex flex-col w-[247px] h-[236px] gap-[15px]">
                            <div className="flex w-[247px] h-[32px] gap-[10px]">
                                <h1 className="flex w-[32px] h-[32px] px-1 py-1 rounded-full bg-[#2DC071] text-white"><Check /></h1>
                                <p className="flex w-[205px] h-[29.25px] text-[14px] font-bold text-white leading-[24px] tracking-[0.2px]">Unlimited product updates</p>
                            </div>
                            <div className="flex w-[247px] h-[32px] gap-[10px]">
                                <h1 className="flex w-[32px] h-[32px] px-1 py-1 rounded-full bg-[#2DC071] text-white"><Check /></h1>
                                <p className="flex w-[205px] h-[29.25px] text-[14px] font-bold text-white leading-[24px] tracking-[0.2px]">Unlimited product updates</p>
                            </div>


                        </div>
                    </div>
                    <div className="flex flex-col border border-[#23A6F0] rounded-[5px] bg-white w-[327px] h-[664px] gap-[35px] px-[40px] py-[50px] mt-[40px]">
                        <h1 className="flex w-[122px] h-[32px] text-[24px] font-bold text-[#252B42] mx-[62.5px] leading-[32px] tracking-[0.2px]">PREMIUM</h1>
                        <h1 className="flex w-[160px] h-[48px] text-[16px] font-bold text-center text-[#737373] mx-[43.5px] leading-[24px] tracking-[0.1px]">Organize across all
                            apps by hand</h1>
                        <div className="flex w-[190px] h-[56px] mx-[28.5px] gap-[10px]">
                            <h1 className="flex w-[104px] h-[50px] text-[40px] font-bold text-[#23A6F0] my-[3px] leading-[50px] tracking-[0.2px]">19.99</h1>
                            <div className="flex flex-col w-[76px] h-[56px]">
                                <h1 className="flex w-[16px] h-[32px] text-[24px] font-bold text-[#23A6F0] leading-[32px] tracking-[0.1px]">$</h1>
                                <h1 className="flex w-[79px] h-[24px] text-[14px] font-bold text-[#8EC2F2] leading-[24px] tracking-[0.2px]">Per Month</h1>
                            </div>

                        </div>
                        <div className="flex flex-col w-[247px] h-[236px]">
                            <div className="flex w-[247px] h-[32px] gap-[10px]">
                                <h1 className="flex w-[32px] h-[32px] px-1 py-1 rounded-full bg-[#2DC071] text-white"><Check /></h1>
                                <p className="flex w-[205px] h-[29.25px] text-[14px] font-bold text-[#252B42] leading-[24px] tracking-[0.2px]">Unlimited product updates</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="absolute flex flex-col w-[1535px] bg-[#FAFAFA] -mx-[242.5px] h-[365px] top-[1160px]">
                    <div className="flex flex-col w-[1050px] h-[365px] mx-[242.5px] py-[80px]">
                        <p className="flex w-[385px] h-[30px] text-[20px] mx-[332.5px] font-bold text-[#252B42 leading-[30px] tracking-[0.2px]">Trusted By Over 4000 Big Companies</p>
                        <div className="flex w-[1050px] h-[175px] gap-[30px] py-[50px]">
                            <div className="flex w-[153px] h-[34px] my-[20.5px]">
                                <Images src="/B1.png" alt="Hooli" width={153} height={34} />
                            </div>
                            <div className="flex w-[146px] h-[59px] my-[8px] px-7">
                                <Images src="/B2.png" alt="Lyft" width={83} height={59} />
                            </div>
                            <div className="flex w-[152px] h-[75px] px-[25px]">
                                <Images src="/B3.png" alt="Cap" width={102} height={75} />
                            </div>
                            <div className="flex w-[151px] h-[42px] my-[16.5px] px-6">
                                <Images src="/B4.png" alt="Stripe" width={103} height={42} />
                            </div>
                            <div className="flex w-[151px] h-[62px] my-[6.5px] px-6">
                                <Images src="/B5.png" alt="aws" width={104} height={62} />
                            </div>
                            <div className="flex w-[151px] h-[72px] my-[1.5px] px-8">
                                <Images src="/B6.png" alt="Flick" width={76} height={72} />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

