import Header from "../../components/Header/Header";
import AddButton from "../../components/UI/Buttons/AddButton";
import "./detailPage.scss";

function DetailPage() {
  return (
    <div className="DetailPage">
      <div className="container">
        <Header />

        <AddButton />
      </div>
    </div>
  );
}

export default DetailPage;
