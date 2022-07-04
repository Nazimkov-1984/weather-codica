import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Info } from "../../../assets/logo/infologo.svg";
import { toggleModal } from "../../../redux/actions";
import { TypedDispatch } from "../../../redux/store";
import "./InfoLogo.css";

const InfoLogo: React.FC = () => {
  const dispatch: TypedDispatch = useDispatch<TypedDispatch>();

  const onClickInfoLogoHandler = useCallback(() => {
    dispatch(toggleModal(true));
  }, [dispatch]);
  return <Info data-testid = "infologo" className="infoLogo" onClick={onClickInfoLogoHandler} />;
};

export default InfoLogo;
