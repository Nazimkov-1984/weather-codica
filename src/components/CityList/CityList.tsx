import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Box, List, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TypedDispatch } from "../../redux/store";
import { setError } from "../../redux/actions";
import { RootState } from "../../redux/store";
import CityCard from "../CityCard/CityCard";
import { IWeatherData } from "../../redux/types";

const CityList: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<TypedDispatch>();
  const weatherData:IWeatherData[] | [] = useSelector((state: RootState) => state.cityWeather.data);
  const loadingIdCard: number | null = useSelector(
    (state: RootState) => state.cityWeather.loadingIdCard
  );
  const loading:number|boolean|null = loadingIdCard && weatherData.length === 0;
  const error:string = useSelector((state: RootState) => state.cityWeather.error);

  return (
    <div data-testid = "citylist">
      <Box height={50}>
        {error && (
          <Alert
            sx={{ width: 320, m: "0 auto" }}
            onClose={() => {
              dispatch(setError());
            }}
            severity="error"
          >
            {error}
          </Alert>
        )}
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        weatherData && (
          <List sx={{ p: "30px" }}>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                500: {
                  slidesPerView: 1.5,
                },
                680: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              centeredSlides={true}
              pagination={{
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              style={{ display: "flex" }}
            >
              {weatherData.map((item) => (
                <SwiperSlide key={item.id}>
                  <CityCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </List>
        )
      )}
    </div>
  );
};

export default CityList;
