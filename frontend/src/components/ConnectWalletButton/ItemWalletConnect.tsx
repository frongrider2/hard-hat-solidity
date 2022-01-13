import { ItemWalletConnectWrapper } from './ConnectWalletButtonStyled';

interface Props {
  onClick?: () => any;
  image: string;
  text: string;
}

const ItemWalletConnect = (props: Props) => {
  return (
    <ItemWalletConnectWrapper onClick={props.onClick}>
      <p>{props.text}</p>
      <div className="wallet_type_img">
        <img alt={props.text} src={props.image} width={500} height={500} />
      </div>
    </ItemWalletConnectWrapper>
  );
};

export default ItemWalletConnect;
