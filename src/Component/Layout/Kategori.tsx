import BaseService from "../../service/service";
import KategoriModel from "../../models/kategori"
import * as React from "react";
import { Link,NavLink  } from 'react-router-dom';
interface IProps {}
interface IState {
  list: Array<KategoriModel>;
  isReady: Boolean;
  hasError: Boolean;
}

class Kategori extends React.Component<IProps, IState> {
    public state: IState = {
        list: new Array<KategoriModel>(),
        isReady: false,
        hasError: false,
      };
      constructor(props: IProps) {
        super(props);
        this.state = {
          isReady: false,
          list: Array<KategoriModel>(),
          hasError: false,
        };
      }
    
      public componentDidMount() {
        BaseService.getAll<KategoriModel>("/master_data/").then((rp) => {

          if (rp.Status) {
            const data = rp.Data;
            const list = new Array<KategoriModel>();
    
            (data || []).forEach((p: any) => {
                list.push(new KategoriModel(p._id, p.title, p.slug));
            });
    
            this.setState({ list: list }); 
            this.setState({ isReady: true });
          } else {
            this.setState({ isReady: true });
            this.setState({ hasError: true });
            console.log("Messages: " + rp.Messages);
            console.log("Exception: " + rp.Exception);
          }
        });
    }

    public tabRow = () => {

        return this.state.list.map(function (object, i) {
          return  <li key={i}><Link to='/'>{object.Title}</Link></li>
        });
      };

    render (){
    return (
        <>
            {this.tabRow()}
        </>
    );
}
}

export default Kategori;