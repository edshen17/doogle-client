import { Autocomplete, TextField } from "@mui/material";
import { NextPage } from "next"
import { SyntheticEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Logo from "../../components/logo";
import { API_STATUS } from "../../store/common";
import { fetchDogBreeds, getAllDogBreeds, getDogBreedsError, getDogBreedsStatus } from "../../store/dog-breeds/dog-breeds-slice";
import { store } from "../../store/store";
import { useRouter } from "next/router"
import { reset } from "../../store/dog-breed-images/dog-breed-images-slice";


const Dogs: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const dogBreeds = useSelector(getAllDogBreeds)
  const dogBreedsStatus = useSelector(getDogBreedsStatus)
  const dogBreedsError = useSelector(getDogBreedsError) // possible future extension: could display something if there was an error

  const onChange = (e: SyntheticEvent<Element, Event>, breedName: string) => {
    store.dispatch(reset())
    router.push(`/dogs/${breedName.toLowerCase()}`)
  }

  useEffect(() => {
    if (dogBreedsStatus == API_STATUS.IDLE) {
      store.dispatch(fetchDogBreeds(`/breeds/list/all`))
    }
  }, [dogBreedsStatus, dispatch])

  return <div>
    <div className="flex flex-col items-center justify-center py-20 lg:py-64">
      <div className="mb-6 text-6xl md:text-8xl">
        <Logo />
      </div>
      <Autocomplete
        className="w-80 md:w-9/12 lg:w-3/12 py-2 md:py-5"
        disablePortal
        loading={ dogBreedsStatus != API_STATUS.SUCCEEDED }
        onChange={ onChange }
        options={ dogBreeds }
        getOptionLabel={(option: any) => option }
        renderInput={(params: any) => <TextField {...params} />}
      />
    </div>
  </div>
}

export default Dogs
