import Spinner from "components/Core/Spinner/Spinner";
import { useSingleProduct } from "hooks/useSingleProduct";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const { createContext, useContext, useMemo, useState } = require("react");

export const ProductDetailContext = createContext();

const ProductDetail = ({ children, id }) => {
    const { data, isFetching } = useSingleProduct(id);

    const [options, setOptions] = useState({
        colorCode: "",
        storageCode: ""
    });

    if (isFetching) {
        return <Spinner />;
    }

    return (
        <ProductDetailContext.Provider value={{ data, options, setOptions }}>
            <Link
                to="/"
                className="z-10 fixed left-0 top-0 m-3 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            >
                &larr;
            </Link>
            <div className="pdp grid lg:grid-cols-2 items-center px-4 min-h-[80vh] relative">
                {children}
            </div>
        </ProductDetailContext.Provider>
    );
};

ProductDetail.Image = function ProductDetailImage() {
    const { data } = useContext(ProductDetailContext);

    return (
        <div className="pdp__image w-full">
            <img
                src={data?.imgUrl}
                className="w-full h-[500px] object-contain  "
            />
        </div>
    );
};

ProductDetail.Attributes = function ProductDetailAttributes() {
    const { data } = useContext(ProductDetailContext);

    const toShowAttributes = useMemo(() => {
        return {
            brand: 'Marca',
            model: 'Modelo',
            price: 'Precio',
            cpu: 'Cpu',
            ram: 'Ram',
            os: 'Sistema operativo',
            displayResolution: 'Resolución de pantalla',
            battery: 'Batería',
            primaryCamera: 'Camara principal',
            secondaryCmera: 'Camara secundaria',
            dimentions: 'Dimensiones',
            weight: 'Peso'
        };
    }, [data]);

    return (
        <div className='flex justify-start items-start flex-col'>
            <h1 className="text-xl font-bold capitalize mb-2">
                {data?.brand} {data?.model}
            </h1>
            <ul>
                {Object.keys(toShowAttributes).map(attrName => {
                    if (data?.[attrName]) {
                        return <li key={attrName}><span className="font-bold">{toShowAttributes[attrName]}</span>: {data[attrName]}</li>;
                    }
                })}
            </ul>
        </div>
    );
};

ProductDetail.Options = function ProductDetailOptions() {
    const { data, setOptions } = useContext(ProductDetailContext);

    const handleOptions = e => {
        const { name, value } = e.target;

        setOptions(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div className="py-3">
                <h2 className="font-semibold">Please select a color</h2>
                <select
                    name="colorCode"
                    className="px-2 border rounded bg-[#eee] py-2"
                    required
                    onChange={handleOptions}
                >
                    <option>Select a color</option>
                    {data?.options?.colors?.map(color => (
                        <option key={color.code} value={color.code}>
                            {color.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="py-3">
                <h2 className="font-semibold">Please select a storage</h2>
                <div className="flex py-2 gap-4">
                    {data?.options?.storages?.map((storage, index) => (
                        <span key={index} className="flex gap-2">
                            <input
                                type="radio"
                                name="storageCode"
                                onChange={handleOptions}
                                value={storage.code}
                                id={`storage-${index}`}
                            />
                            <label htmlFor={`storage-${index}`}>{storage.name}</label>
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

ProductDetail.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string
};

export default ProductDetail;