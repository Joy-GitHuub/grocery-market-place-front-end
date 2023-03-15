import React from 'react';
import useAuth from './../../../Context/useAuth';
import { toast } from 'react-toastify';

const ManageProductUpdate = () => {

    const {viewOrder} = useAuth()
    const {viewOrderId} = viewOrder;
    const {_id,tags,imageURL,additionalInformation, category,name, unit,status,stock,brand, price,discountPrice,description,shortDescription, features} = viewOrderId;
    const additionalInfo =  additionalInformation[0];

    const handleUpdateProductInfo = (e) => {
         e.preventDefault();
        const imageArray = e.target.imageURL.value;

        const name = e.target.name.value;
        const description = e.target.description.value;
        const shortDescription = e.target.shortDescription.value;
        const imageURL = imageArray.split(',')
        const price = e.target.price.value;
        const discountPrice = e.target.discountPrice.value;
        const status = e.target.status.value;
        const stock= e.target.stock.value;
        const features = e.target.features.value;
        const category = e.target.category.value;
        const brand = e.target.brand.value;
        const unit = e.target.unit.value;
        const tags= e.target.tags.value;
        const weight = e.target.weight.value;
        const color = e.target.color.value;
        const dimensions = e.target.dimensions.value;
        
        const product = {
            id: _id,
            data: {name: name,
                description: description,
                shortDescription: shortDescription,
                price: price,
                imageURL: imageURL,
                discountPrice: discountPrice,
                status: status,
                stock: stock,
                category: category,
                brand: brand,
                unit: unit,
                tags: tags,
                additionalInformation: [ {weight, color, dimensions}  ],
                features: [features],}
        };
        

        console.log(product);
        const url = `https://market-place-server-site.vercel.app/api/v1/product/update_product`
        fetch(url, {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(product),
        }).then((res) => res.json())
        .then((data) => {
            if(data.statusbar){
                toast.success('Product Update Success Fully....', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        })
    }


    return (
        <div>
        {viewOrderId &&
            <section className='manage_add_product_section'>
            <div className="manage_add_product_header">
                <h3>Update Your Products Page</h3>
            </div>

            <div className="manage_add_product_from_wrap">
                <form onSubmit={handleUpdateProductInfo}>
                    <div className="manage_add_product_col">

                    <div className="product_input_box_wrap">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="name" id="productName" placeholder='Give Your Product Name.....' defaultValue={name} required />
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productDescription">Product Description</label>
                    <textarea name="description" id="productDescription" placeholder='Please Give Your Product Main Description......' required defaultValue={description} ></textarea>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productShortDescription">Product Short Description</label>
                    <textarea name="shortDescription" id="productShortDescription" className='product_short_description' placeholder='Please Give Your Product Short Description....' required defaultValue={shortDescription} ></textarea>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productImage">Product Image URL</label>
                    <textarea 
                    defaultValue={
                        imageURL.map((image) => image)
                    }
                    name="imageURL" id="productImage" className='product_imageURL' placeholder='Please Give Your Product Multiple Image URL Using Space....' required ></textarea>
                    </div>

                    <div className="manage_add_product_short_input_wrap">
                    <div className="product_input_box_wrap">
                    <label htmlFor="productPrice">Product Price</label>
                    <input name="price" className='value_left' id="productPrice" type='number' required step="0.01" defaultValue={price} ></input>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productDiscount">Product Discount</label>
                    <input name="discountPrice" id="productDiscount" className='value_left' type='number' defaultValue={discountPrice} required step="0.01"></input>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productStock">Product Stock</label>
                    <input name="stock" id="productStock" type='number' className='value_left' placeholder='Please Give Your Product Stock Number....' defaultValue={stock} required step="0.01" ></input>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="brandName">Brand Name</label>
                    <input name="brand" id="brandName" type='text' placeholder='Please Give Your Product Brand Name....' defaultValue={brand} required ></input>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="categoryName">Category Name</label>
                    <input name="category" id="categoryName" type='text' placeholder='Please Give Your Product Category Name....' defaultValue={category} required ></input>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productTag">Product Tags</label>
                    <input name="tags" id="productTag" type='text' placeholder='Please Give Your Product Tags Name....'  defaultValue={tags} required></input>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productWeight">Product Weight</label>
                    <input name="weight" id="productWeight" type='text' placeholder='Please Give Your Product Weight....' defaultValue={additionalInfo?.weight} required ></input>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productColor">Product Color</label>
                    <input name="color" id="productColor" type='text' placeholder='Please Give Your Product Color....' defaultValue={additionalInfo?.color}  required></input>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productDimensions">Product Dimensions</label>
                    <input name="dimensions" id="productDimensions" type='text' placeholder='Please Give Your Product Dimensions....' defaultValue={additionalInfo?.dimensions} required ></input>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productUnit">Product Unit</label>
                    <select id='productUnit' name='unit' required>
                        <option>{unit}</option>
                        <option>Select Unit Option---</option>
                        <option value={'kg'}>kg</option>
                        <option value={'litre'}>litre</option>
                        <option value={'pcs'}>pcs</option>
                        <option value={'bag'}>bag</option>
                    </select>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productStatus">Product Status</label>
                    <select id='productStatus' name='status' required>
                        <option>{status}</option>
                        <option>Select Status Option---</option>
                        <option value={'in-stock'}>in-stock</option>
                        <option value={'out-of-stock'}>out-of-stock</option>
                        <option value={'sold-out'}>sold-out</option>
                    </select>
                    </div>

                    <div className="product_input_box_wrap">
                    <label htmlFor="productFeatures">Product Features</label>
                    <input name="features" id="productFeatures" type='text' placeholder='Please Give Your Product Features....' required defaultValue={features[0]}></input>
                    </div>

                    </div>

                    <div className="add_product_submit_btn_wrap">
                    <input className='add_product_submit_btn' type="submit" value="Update-Product" />
                    </div>
                    </div>
                </form>
            </div>
        </section>}
        </div>
    );
};

export default ManageProductUpdate;