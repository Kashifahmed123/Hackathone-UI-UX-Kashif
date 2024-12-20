import react from "react"

const Cart2 = () => {

    const Products1 = [
        { Image: "/C3P1.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png"},
        { Image: "/C3P2.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "/C3P3.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "/C3P4.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
    ]
    const Products2 = [
        { Image: "C4P1.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "C4P2.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "C4P3.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "C4P4.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
    ]
    const Products3 = [
        { Image: "C5P1.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "C5P2.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "C5P3.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "C5P4.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
    ]
    return (

        <div className="flex border w-[1535px] h-[1778px] bg-white">
            <div className="flex flex-col w-[1124px] h-[1778px] mx-[220px] py-[48px] gap-[48px]">                
                <div className="flex lg:flex-row w-[1048px] h-[488px] gap-[30px] mx-[37.5px]">
                    {Products1.map((FeaturedProducts, index) => {
                        return (
                            <div key={index} className="flex flex-col w-[238px] h-[488px]">
                                <img src={FeaturedProducts.Image} alt={FeaturedProducts.Name} className="w-[239px] h-[300px] object-cover" />
                                <div className="flex flex-col  w-full h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px]">
                                    <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[131px] h-[24px] mx-[29px] text-center">{FeaturedProducts.Name}</p>
                                    <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[146px] h-[24px] mx-[21.5px] text-center">{FeaturedProducts.Department}</p>
                                    <div className="flex flex-row w-[108px] h-[34px] mx-[40.5px] gap-[5px] px-[3px] py-[5px]">
                                        <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD] tracking-[0.1px] w-[52px] h-[24px] mx-[3px]">${FeaturedProducts.price1}</p>
                                        <p className="text-[14px] font-bold leading-[24px] text-[#23856D] tracking-[0.2px] w-[45px] h-[24px] ">${FeaturedProducts.price2}</p>
                                    </div>
                                    <img src={FeaturedProducts.Reviews} alt="circles" className="w-[82.23px] h-[16px] mx-[53.38px] object-cover" />
                                </div>
                            </div>

                        )
                    }
                    )}
                </div>
                <div className="flex w-[1048px] h-[488px] gap-[30px] mx-[37.5px]">
                    {Products2.map((FeaturedProducts, index) => {
                        return (
                            <div key={index} className="flex flex-col w-[240px] h-[488px]">
                                <img src={FeaturedProducts.Image} alt={FeaturedProducts.Name} className="w-[239px] h-[300px] object-cover" />
                                <div className="flex flex-col w-full h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px]">
                                    <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[131px] h-[24px] mx-[29px] text-center">{FeaturedProducts.Name}</p>
                                    <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[146px] h-[24px] mx-[21.5px] text-center">{FeaturedProducts.Department}</p>
                                    <div className="flex flex-row w-[108px] h-[34px] mx-[40.5px] gap-[5px] px-[3px] py-[5px]">
                                        <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD] tracking-[0.1px] w-[52px] h-[24px] mx-[3px]">${FeaturedProducts.price1}</p>
                                        <p className="text-[14px] font-bold leading-[24px] text-[#23856D] tracking-[0.2px] w-[45px] h-[24px] ">${FeaturedProducts.price2}</p>
                                    </div>
                                    <img src={FeaturedProducts.Reviews} alt="circles" className="w-[82.23px] h-[16px] mx-[53.38px] object-cover" />
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                <div className="flex w-[1048px] h-[488px] gap-[30px] mx-[37.5px]">
                    {Products3.map((FeaturedProducts, index) => {
                        return (
                            <div key={index} className="flex flex-col w-[240px] h-[488px]">
                                <img src={FeaturedProducts.Image} alt={FeaturedProducts.Name} className="w-[239px] h-[300px] object-cover" />
                                <div className="flex flex-col w-full h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px]">
                                    <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[131px] h-[24px] mx-[29px] text-center">{FeaturedProducts.Name}</p>
                                    <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[146px] h-[24px] mx-[21.5px] text-center">{FeaturedProducts.Department}</p>
                                    <div className="flex flex-row w-[108px] h-[34px] mx-[40.5px] gap-[5px] px-[3px] py-[5px]">
                                        <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD] tracking-[0.1px] w-[52px] h-[24px] mx-[3px]">${FeaturedProducts.price1}</p>
                                        <p className="text-[14px] font-bold leading-[24px] text-[#23856D] tracking-[0.2px] w-[45px] h-[24px] ">${FeaturedProducts.price2}</p>
                                    </div>
                                    <img src={FeaturedProducts.Reviews} alt="circles" className="w-[82.23px] h-[16px] mx-[53.38px] object-cover" />
                                </div>
                            </div>
                        )
                    }
                    )
                    }
            </div>
            <div className="flex border-[#BDBDBD] border-[1.75px] rounded-[6.73px] shadow-md w-[313px] h-[74px] mx-[405.5px]">
                <p className="flex border-r-[#BDBDBD] border-[1px] w-[84px] h-[71px] px-[25px] py-[25px] font-bold text-[14px] bg-[#F3F3F3] text-[#BDBDBD] leading-[24px] tracking-[0.2px]">First</p>
                <p className="flex w-[46px] h-[71px] px-[20px] py-[25px] font-bold text-[14px] text-[#23A6F0] leading-[24px] tracking-[0.2px]">1</p>
                <p className="flex w-[49px] h-[71px] px-[20px] py-[25px] font-bold text-[14px] bg-[#23A6F0] text-[#FFFFFF] leading-[24px] tracking-[0.2px]">2</p>
                <p className="flex border-r-[#E8E8E8] border-[2px] w-[84px] h-[71px] px-[20px] py-[25px] font-bold text-[14px] bg-[#FFFFFF] text-[#23A6F0] leading-[24px] tracking-[0.2px]">3</p>
                <p className="flex w-[78px] h-[71px] px-[23px] py-[25px] font-bold text-[14px] bg-[#FFFFFF] text-[#23A6F0] leading-[24px] tracking-[0.2px]">Next</p>
            </div>
        </div>
        </div>
    )
}
export default Cart2





