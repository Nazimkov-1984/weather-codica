import { SyntheticEvent, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/actions";
import { RootState } from "../../redux/store";
import "./ModalInfo.css";

const ModalInfo: React.FC = () => {
  const modal = useRef(null);
 const isOpen:boolean = useSelector((state: RootState) => state.cityWeather.isOpenModal); 
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    dispatch(toggleModal(false));
  }, [dispatch]);

  const onOutsideClick = useCallback(
    (e: SyntheticEvent) => {
      if (modal.current === e.target) {
        dispatch(toggleModal(false));
      }
    },
    [dispatch]
  );

  if (isOpen) {
    return (
      <div data-testid="modalInfo" ref={modal} className="modal" onClick={onOutsideClick}>
        <div className="modalBody">
          <h2 className="modalTitle">
            Для того чтобы найти погоду:
          </h2>
          <ul className="listTips">
            <li>
             введите название города
            </li>
            <li>
              при нажатии на кнопку + город добавится в ваши избранные города
            </li>
            <li>
             нажав на карточку с погодой Вы можете получить детальный прогноз погоды
            </li>
          </ul>
          <button className="buttonModal" onClick={onCloseModal}>
            Close
          </button>
        </div>
      </div>
    );
  } else return null;
};

export default ModalInfo;
