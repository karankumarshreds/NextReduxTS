import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actions from './actions';

export const useActions = () => bindActionCreators(actions, useDispatch);
