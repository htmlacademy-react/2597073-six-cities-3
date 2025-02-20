import {JSX, useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found-page/NotFound.tsx';
import {getNearOffers} from './utils.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/store.ts';
import {fetchNearbyOffers, fetchOffer} from '../../store/thunk/offers.ts';
import {fetchOffersStatus} from '../../store/slices/offers.ts';
import Loader from '../../component/Loader/Loader.tsx';
import {
  selectNearbyOffers, selectOffer,
  selectOfferStatus
} from '../../store/selectors/offerSelector.ts';
import {fetchAllComments} from '../../store/thunk/comments.ts';
import OffersNearby from '../../component/Offers-nearby/OffersNearby.tsx';
import OfferInfo from '../../component/Offer-info/OfferInfo.tsx';


function Offer(): JSX.Element {
  const dispatch = useAppDispatch();
  const loadingOfferStatus = useAppSelector(selectOfferStatus);
  const currentOffer = useAppSelector(selectOffer);
  const nearbyOffers = useAppSelector(selectNearbyOffers);

  const id = String(useParams().id);

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchAllComments(id));
  },[dispatch, id]);

  const nearOffers = useMemo(() => getNearOffers(currentOffer, nearbyOffers), [currentOffer, nearbyOffers]);

  if (loadingOfferStatus === fetchOffersStatus.Loading) {
    return <Loader />;
  }

  if (!currentOffer || loadingOfferStatus === fetchOffersStatus.Error) {
    return <NotFound/>;
  }


  const nearAndCurrentOffers = [...nearbyOffers, currentOffer];

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <OfferInfo
          currentOffer={currentOffer}
          nearAndCurrentOffers={nearAndCurrentOffers}
          offerId={id}
        />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersNearby nearOffers={nearOffers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
