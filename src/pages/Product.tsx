import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import HomeIcon from "../components/Icons/HomeIcon";
import { Link } from "react-router-dom";
import { fetchProduct } from "../utils/fetch";
import Mark from "../components/Icons/Mark";
import Chess from "../components/Icons/Chess";
import Costs from "../components/Icons/Costs";
import TRL from "../components/Icons/TRL";
import Technology from "../components/Icons/Technology";
import DetailWithLabel from "../components/DetailWithLabel";
import Position from "../components/Icons/Position";
import { useSelector } from "react-redux";
import { configType } from "../types";

interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  const config: configType = useSelector(
    (state): configType => state as configType
  );
  const [productDetail, setProductDetail] = useState<any>(null);
  useEffect(() => {
    fetchProduct()
      .then((res) => res.json())
      .then((res) => setProductDetail(res));
  }, []);
  return (
    <div className="w-full">
      <div className="flex items-center mb-5">
        <BreadCrumbs
          icon={<HomeIcon />}
          path={[
            "Offers",
            "Intelligent Finite Elements in Structural mechanics",
          ]}
        />
        <div
          className="rounded-md ml-auto w-[45px] h-[30px] flex justify-center items-center text-white"
          style={{ backgroundColor: config.mainColor }}
        >
          <Link to="/product/edit">Edit</Link>
        </div>
      </div>
      {!productDetail && (
        <div className="w-full flex justify-center items-center">
          <div className="my-28 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        </div>
      )}
      {productDetail && (
        <div>
          <div className="rounded-md border flex flex-col lg:flex-row">
            <div className="flex-1 border-r">
              <div className="relative">
                <img
                  src={productDetail.picture}
                  alt="blog"
                />
                <div className="absolute top-0 left-0 bg-white rounded-tl-md rounded-br-md w-28 h-10 flex items-center">
                  <div
                    className="rounded-tl-md rounded-br-md h-10 w-10 flex items-center justify-center"
                    style={{ backgroundColor: config.mainColor }}
                  >
                    <Mark />
                  </div>
                  <div className="text-[#374151] text-base pl-3 font-semibold">
                    Patent
                  </div>
                </div>
              </div>
              <div className="m-5">
                <div className="text-color1 mb-2.5 font-semibold text-base">
                  {productDetail.name}
                </div>
                <div
                  className="text-color2 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: productDetail.description,
                  }}
                />
              </div>
            </div>
            {config.hasUserSection && (
              <div className="w-[382px] p-5">
                <div className="text-color1 text-base font-semibold mb-5">
                  Offered By
                </div>
                <img
                  src={config.logo}
                  alt="logo"
                  className="w-[200px] h-[36px] mb-5"
                />
                <div className="mb-5 flex items-center">
                  <img
                    className="rounded-full w-[60px] h-[60px]"
                    src={productDetail.user.profilePicture}
                    alt="profile"
                  />
                  <div className="ml-[15px] text-color2">
                    <div className="text-[18px] font-semibold">
                      {productDetail.user.firstName}{" "}
                      {productDetail.user.lastName}
                    </div>
                    <div className="text-sm">{productDetail.company.name}</div>
                  </div>
                </div>
                <div className="ml-[15px] text-color2 flex">
                  <Position />
                  <div className="ml-[5px]">
                    <div>{productDetail.company.address.street}</div>
                    <div>
                      {productDetail.company.address.zipCode}&nbsp;
                      {productDetail.company.address.city.name}&nbsp;
                      {productDetail.company.address.country.name}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="rounded-md border mt-5 p-5 flex flex-col">
            <div className="text-base font-semibold text-color1">Video</div>
            <div className="mt-5 flex justify-center items-center">
              <video src={productDetail.video} />
            </div>
          </div>
          <div className="flex rounded-md border mt-5 p-5 pt-6 flex-col">
            <div className="text-base font-semibold text-color1 mb-5">
              Offer details
            </div>
            <div className="flex flex-col lg:flex-row">
              <DetailWithLabel
                icon={<Technology />}
                title="Technology"
                label={productDetail.categories.map((i: any) => i.name)}
              />
              <DetailWithLabel
                icon={<Chess />}
                title="Business Model"
                label={productDetail.businessModels.map((i: any) => i.name)}
              />
            </div>
            <div className="flex flex-col lg:flex-row">
              <DetailWithLabel
                icon={<TRL />}
                title="TRL"
                label={[productDetail.trl.name]}
              />
              <DetailWithLabel
                icon={<Costs />}
                title="Costs"
                label={[productDetail.investmentEffort]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
