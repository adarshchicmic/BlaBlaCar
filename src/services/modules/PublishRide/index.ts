import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    publishRide: build.mutation({
      query: ({
        source,
        destination,
        sourceLongitude,
        sourceLatitude,
        destinationLatitude,
        destinationLongitude,
        passsengerCount,
        addCity,
        addCityLongitude,
        addCityLatitude,
        date,
        time,
        setPrice,
        aboutRide,
        vehicleId,
        bookInstantly,
        midSeat,
        estimatedTime,
      }) => ({
        url: 'publishes/',
        method: 'POST',
        body: {
          publish: {
            source: source,
            destination: destination,
            source_longitude: sourceLatitude,
            source_latitude: sourceLongitude,
            destination_longitude: destinationLongitude,
            destination_latitude: destinationLatitude,
            passengers_count: passsengerCount,
            add_city: addCity,
            add_city_longitude: addCityLongitude,
            add_city_latitude: addCityLatitude,
            date: date,
            time: time,
            set_price: setPrice,
            about_ride: aboutRide,
            vehicle_id: vehicleId,
            book_instantly: bookInstantly,
            mid_seat: midSeat,
            estimate_time: estimatedTime,
            select_route: {},
          },
        },
      }),
      //   async onQueryStarted(id, {dispatch, queryFulfilled}) {
      //     try {
      //       const result: any = await queryFulfilled;
      //       console.log(
      //         result?.meta?.response?.headers?.map?.authorization,
      //         'this is response tokne',
      //       );
      //       dispatch(
      //         updateToken({
      //           token: result?.meta?.response?.headers?.map?.authorization,
      //         }),
      //       );
      //     } catch (err) {
      //       console.log(err, 'Error over here');

      //       // `onError` side-effect
      //       // dispatch(messageCreated('Error fetching post!'))
      //     }
      //   },
    }),
  }),

  overrideExisting: true,
});
export const {usePublishRideMutation} = userApi;
