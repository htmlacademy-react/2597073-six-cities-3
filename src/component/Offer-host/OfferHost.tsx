import {OfferHost} from '../../mocks/offer.ts';

type TOfferHostProps = {
  host: OfferHost;
  description: string;
};

const OfferHostInfo = ({host, description}: TOfferHostProps) => {
  const {avatarUrl, name, isPro} = host;

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74"
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">
          {name}
        </span>
        <span className="offer__user-status">
          {isPro && 'Pro'}
        </span>
      </div>
      <div className="offer__description">
        <p className="offer__text">
          {description}
        </p>
        <p className="offer__text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OfferHostInfo;
