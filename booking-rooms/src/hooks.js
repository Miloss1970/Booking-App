import { useDispatch } from "react-redux";
import { fetchData } from "./service/cabine";
import { useEffect } from "react";
import { storeAllCabines } from "./store/cabineSlice";
import { fetchBooking } from "./service/booking";

export const useRooms = (fetchParams) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData(fetchParams);
      dispatch(storeAllCabines(data));
    };

    fetchDataAsync();
  }, [fetchParams]);
};

export const useBooking = (fetchParams, setBooking, setLoading) => {
  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchBooking(fetchParams);
      if (data) {
        setBooking(data);
        setLoading(true);
      }
    };

    fetchDataAsync();
  }, [fetchParams]);
};
