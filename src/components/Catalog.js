import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';


const columns = [{
  dataField: 'id',
  text: 'ID Produktu'
}, {
  dataField: 'name',
  text: 'Nazwa Produktu'
}, {
  dataField: 'price',
  text: 'Cena'
}];

const products = [{
  id: 1,
  name: 'KLA-21/FL',
  price: 23
}, {
  id: 2,
  name: 'KLS-22/EL',
  price: 31
}, {
  id: 3,
  name: 'FLA Elastic/PCP-22 ZL/KM',
  price: 131
}, {
  id: 4,
  name: 'ZSD Elastic/PCP-43 DD/SM',
  price: 131
}];


export const Catalog = () => <div className="container">

  <div className="row">
    <hr />
  </div>

  <div className="row">
    <div className="col-md-12 tabelka">
      <div className="bigHeader">KATALOG PRODUKTÓW</div>
      <BootstrapTable keyField='id' data={products} columns={columns} />
    </div>
  </div>

</div>;