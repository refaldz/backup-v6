import { Helmet } from 'react-helmet-async';
import Header from 'src/pages/Header/header';

import { AppView } from 'src/sections/overview/view';
import UploadData from "../uploadData"
import PdbT1 from '../sections/overview/view/pdb_T1'
import PdbT2 from '../sections/overview/view/pdb_T2'
import PdbT3 from '../sections/overview/view/pdb_T3'
import PdbT4 from '../sections/overview/view/pdb_T4'
import PdbTahunan from '../sections/overview/view/pdb_tahunan'
// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>
      
      <Header />
      {/* <UploadData/> */}
      {/* Linechart */}
      <PdbT1/> 
      <PdbT2/> 
      <PdbT3/>
      <PdbT4/>
      <PdbTahunan/>

      {/* <AppView /> */}
    </>
  );
}
