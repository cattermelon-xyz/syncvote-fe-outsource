import BarChartIcon from '@assets/icons/svg-icons/BarChartIcon';
import EnforcerIcon from '@assets/icons/svg-icons/EnforcerIcon';
import EnforcerIconV2 from '@assets/icons/svg-icons/EnforcerIconV2';
import LikeIcon from '@assets/icons/svg-icons/LikeIcon';
import NoFlashIcon from '@assets/icons/svg-icons/NoFlashIcon';
import QuestionCircleIcon from '@assets/icons/svg-icons/QuestionCircleIcon';
import SingleChoiceIcon from '@assets/icons/svg-icons/SingleChoiceIcon';
import UpVoteIcon from '@assets/icons/svg-icons/UpVoteIcon';
import VetoIcon from '@assets/icons/svg-icons/VetoIcon';
import XOctagonIcon from '@assets/icons/svg-icons/X-OctagonIcon';

const ICON_LIST3 = {
  unknown: {
    id: 'unknown',
    icon: <QuestionCircleIcon color="#898988" />,
    type: 'Unkown',
  },
  enforcer: {
    id: 'enforcer',
    icon: <EnforcerIcon color="#898988" />,
    type: 'Enforcer',
  },
  polling: {
    id: 'polling',
    icon: <BarChartIcon color="#898988" />,
    type: 'Polling',
  },
  single_choice_vote: {
    id: 'single-choice-vote',
    icon: <SingleChoiceIcon width="24px" color="#898988" />,
    type: 'Single choice vote',
  },
  up_vote: {
    id: 'up-vote',
    icon: <LikeIcon color="#898988" />,
    type: 'Upvote',
  },
  veto: {
    id: 'veto',
    icon: <VetoIcon width="24px" />,
    type: 'Veto',
  },
  end: {
    id: 'end',
    icon: <XOctagonIcon color="#898988" />,
    type: 'End',
  },
};
const ICON_LIST_V2 = {
  unknown: {
    id: 'unknown',
    icon: <QuestionCircleIcon color="#0a0a08" />,
    type: 'Unkown',
  },
  enforcer: {
    id: 'enforcer',
    icon: <EnforcerIconV2 />,
    type: 'Enforcer',
  },
  polling: {
    id: 'polling',
    icon: <BarChartIcon />,
    type: 'Polling',
  },
  single_choice_vote: {
    id: 'single-choice-vote',
    icon: <SingleChoiceIcon width="24px" />,
    type: 'Single choice vote',
  },
  up_vote: {
    id: 'up-vote',
    icon: <UpVoteIcon width="24px" />,
    type: 'Upvote',
  },
  veto: {
    id: 'veto',
    icon: <NoFlashIcon />,
    type: 'Veto',
  },
  end: {
    id: 'end',
    icon: <XOctagonIcon color="#0a0a08" />,
    type: 'End',
  },
};

export { ICON_LIST_V2, ICON_LIST3 };
