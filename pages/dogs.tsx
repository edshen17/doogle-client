import { NextPage } from "next"
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Logo from "../components/logo";
import { getAllDogBreeds, getDogBreedsError, getDogBreedsStatus, fetchDogBreeds, API_STATUS } from "../store/dog-breeds/dog-breeds-slice"
import { store } from "../store/store";


const Dogs: NextPage = () => {
  const dispatch = useDispatch();
  const dogBreeds = useSelector(getAllDogBreeds)
  const dogBreedsStatus = useSelector(getDogBreedsStatus)
  const dogBreedsError = useSelector(getDogBreedsError)

  useEffect(() => {
    if (dogBreedsStatus == API_STATUS.IDLE) {
     store.dispatch(fetchDogBreeds())
    }
  }, [dogBreedsStatus, dispatch])

  console.log(dogBreeds)

  return <div>
    <div className="flex flex-col items-center justify-center py-32 md:py-64">
      <div className="mb-6 text-6xl md:text-8xl" style={{ fontFamily: "Roboto, sans-serif;" }}>
        <Logo />
      </div>
      <div className="flex items-center w-full mx-auto mb-4 border rounded-full lg:max-w-2xl hover:shadow-md">
        <input type="text" className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none" />
      </div>
    </div>
  </div>
}

export default Dogs
