import React from 'react';
import SliderCard from '@components/SliderCard/SliderCard';
import BannerDashBoard from '@components/BannerDashBoard/BannerDashBoard';
import { CARD_TYPE, ECardEnumType } from '@utils/constants';
import { dataBluePrintCards, dataInitiativeCards, dataProposalCards } from '@pages/Home/mockData';
import { useDispatch } from 'react-redux';
import { resetBlueprint } from '@redux/reducers/blueprint.reducer';

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(resetBlueprint(''));
  return (
    <div className="flex flex-col w-full">
      <BannerDashBoard />
      <div className="container mx-auto relative">
        <SliderCard
          cardTitle={CARD_TYPE.INITIATIVE}
          cardType={ECardEnumType.INITIATIVE}
          amount={8}
          dataCard={dataInitiativeCards}
        />
        <SliderCard
          cardTitle={CARD_TYPE.PROPOSAL}
          cardType={ECardEnumType.PROPOSAL}
          amount={9}
          dataCard={dataProposalCards}
        />
        <SliderCard
          cardTitle={CARD_TYPE.BLUEPRINT}
          cardType={ECardEnumType.BLUEPRINT}
          amount={12}
          dataCard={dataBluePrintCards}
        />
      </div>
    </div>
  );
};

export default HomePage;
