import { Autocomplete, TextField } from "@mui/material";
import { NextPage } from "next"
import { SyntheticEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Logo from "../../components/logo";
import { API_STATUS } from "../../store/common";
import { fetchDogBreeds, getAllDogBreeds, getDogBreedsError, getDogBreedsStatus } from "../../store/dog-breeds/dog-breeds-slice";
import { store } from "../../store/store";


const Dogs: NextPage = () => {
  const dispatch = useDispatch();
  const dogBreeds = useSelector(getAllDogBreeds)
  const dogBreedsStatus = useSelector(getDogBreedsStatus)
  const dogBreedsError = useSelector(getDogBreedsError) // possible future extension: could display something if there was an error

  const onChange = (e: SyntheticEvent<Element, Event>, value: any) => {
    console.log(value)
  }

  useEffect(() => {
    if (dogBreedsStatus == API_STATUS.IDLE) {
     store.dispatch(fetchDogBreeds())
    }
  }, [dogBreedsStatus, dispatch])

  return <div>
    <div className="flex flex-col items-center justify-center py-32 md:py-64">
      <div className="mb-6 text-6xl md:text-8xl">
        <Logo />
      </div>
      <Autocomplete
        className="w-80 md:w-3/12 py-3"
        disablePortal
        loading
        onChange={onChange}
        options={dogBreeds}
        getOptionLabel={(option: any) => option }
        renderInput={(params) => <TextField {...params} autoFocus />}
      />
    </div>
  </div>
}

export default Dogs
