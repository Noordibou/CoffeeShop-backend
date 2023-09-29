import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64'; // Import FileBase component

const Edit = ({ shop, onEditSubmit }) => {
    const [editedShop, setEditedShop] = useState({});
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        setEditedShop(shop);
    }, [shop]);

    const handleChange = (e) => {
        setEditedShop({ ...editedShop, [e.target.name]: e.target.value });
    };

    // Handle image selection
    const handleFileUpload = (file) => {
        setEditedShop({ ...editedShop, image: file.base64 });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEditSubmit(editedShop);
        setIsFormOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="text-bodyColor cursor-pointer"
            >
                {isFormOpen ? 'Close Edit Form' : 'Edit Coffee Shop'}
            </button>

            {isFormOpen && (
                <div className="p-2 border rounded-lg border-gray-300">
                    <summary className="text-lg font-semibold text-bodyColor ">Edit Coffee Shop</summary>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={editedShop.name}
                                name="name"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md text-bodyColor border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="Author"
                                value={editedShop.author}
                                name="author"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md text-bodyColor border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <textarea
                                type="text"
                                placeholder="Description"
                                value={editedShop.description}
                                name="description"
                                onChange={handleChange}
                                className="w-full px-4 py-2 h-[200px] border rounded-md text-bodyColor border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="Featured Items"
                                value={editedShop.featuredItems}
                                name="featuredItems"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md text-bodyColor border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="Website"
                                value={editedShop.website}
                                name="website"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md text-bodyColor border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="City, State"
                                value={editedShop.cityState}
                                name="cityState"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md text-bodyColor border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                value={editedShop.location}
                                name="location"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md text-bodyColor border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="number"
                                placeholder="Ratings"
                                value={editedShop.rating}
                                name="rating"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md text-bodyColor border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                    Image Upload:
                                </label>
                                {/* Use FileBase component for image upload */}
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={handleFileUpload}
                                />
                            </div>
                            <input
                                type="submit"
                                value="Submit"
                                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-bodyColor cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Edit;
