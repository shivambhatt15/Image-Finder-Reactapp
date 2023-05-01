import { useState, useEffect } from 'react';

import NavBar from './component/Navbar';
import BreadCrumb from './component/BreadCrumb';
import Images from './component/Images';
import Snackbar from './component/SnackBar';
import { getImages } from './services/api';


function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(5);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (count < 3 || count > 200) {
      setOpen(true);
      return;
    }
    setOpen(false);
    const getData = async () => {
      const res = await getImages(text, count);
      setData(res.data.hits);
    }
    getData();
  }, [text, count])

  return (
    <div>
      <NavBar />
      <BreadCrumb setText={setText} setCount={setCount} />
      <Images data={data} />
      <Snackbar open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
