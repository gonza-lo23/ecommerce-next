'use client'
import './ui/global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <header className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-semibold text-indigo-600 hover:text-green-600">E-commerce Store</a>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#" className="text-gray-700 hover:text-green-600">Home</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-600">Products</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-600">Contact</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-green-600">Cart</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div className="bg-gray-200 p-8">
        <div className="container mx-auto">
          {children}
        </div>
    </div>
    <main className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Product Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSFRQYGBgYGBgSGBkYGBoYGRIZGBgcGhoZGBgcIS4lHB4rIRgYJzgnKy80NTU1GiQ7QDs0Py40NTQBDAwMEA8PHhERGUApJCs3Nz8+PzE/Oz9AND80PT83Pz80PzE9ND89NToxMTo4NT1AP0AxPT8/PD80QDc0NDQzMf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAQUBAQAA
                AAAAAAAAAAAAAgEDBAUGBwj/xABDEAACAQIDBAYHAwoFBQAAAAABAgADEQQSIQUxQVEGEyJhcZEHMkKBobHBFeHwFBcjUlRicpPR00SCkqLxM1OjstL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAGhEBAQEBAQEBAAAAAAAAAAAAAAERAiExE//aAAwDAQACEQMRAD8A9miIgIiICIiAiIgIiQZrC5NgN
                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
                XM+X3x9rUuZ8vvm4iBpvtalzPl98DatLmfIf1m5iBpvtWj+t8JcTaFJtzj33HzE2ssVcOjesinxAgWc0peY9bCNT7SXK7yh1t3qZWnWDC4gX7yt5bDxmgTMi0pmlC0DHxAmxwTXRfC3lp9Jrqxmds0/ox4n5wMyIiAiIgIiICIiAiIgIiIGiQ2J8T85fDS1ihldh35vPWQFSBk5pE1JjmpLbVYGS1SWEzVWyKbD2m5DjaYb1GYhVuSTbT5TosBhBTXLx3seZ/pAu0KKooVRYD8XPfL0RAREQEREBERAREQEREBNNtDDFD1iDsn1l4DvE3Mgygggi4Oh74GlSuCLiXA8wsfQNFrj1DqP6eIhK1+MDO6yUzTFDyWeBcqGbLZo7A8T85qGabvCJlUDu18TqfnAvxEQEREBERAREQEREBEpBMDX7Vo3Gcbxv8Ofu+s03WzpjUHMTntq7PGr03UcSrMAP8p4eBgWGrTGq17nKL3M1tXFFSFPrE2Ave/HQjfuM6LYeBVbVKjKX3quYHJ3m2hPhpA2Gx8BkXMw7R/wBo5eM2ssisOY85LPAuRLeeVzQJxIZpXNAlEjmjNAlEhmlc0CUSOaM0CUSOaUzQJxIZpTPAhicOrqUPH4HnOVxFNqTFW8eYPeJ1hqju85hbSopVXKzAEaq1xcH+kDRrWkxVmmxVRqL5HtyUg5g3gfpv8JsNnYV6hBZ1Re9gWPgt9Pf8YG02fRzv+6urfQToJi4ZUVQqWsO/f3k8TMjMIEolLysBERAREQEREBERAoRIGnLkQMV8KDMd9ngzZSloGnOzR+AJX8g75tssplgaz8lPOVGHb9YzZZYywNeKT85IU35zOyxlgYOR+cWfnM7LKZIGFZ+cWfnM3JGSBh2fnFn5zNyxlgYNn5xZ+czskpkgYeR+cp1b85nZYywMA035yJoPzmxyxlgaw4VuZkTgjzm1yxlgan7OB/AlxNnCbPLKgQMNMGBLy0bS/ECIWSiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH/2Q==" alt="Product 1" className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-indigo-600">Product 1</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="mt-4">
                        <span className="text-indigo-600 font-semibold">$99.99</span>
                        <button className="bg-indigo-600 text-white px-2 py-1 rounded-full float-right hover:bg-indigo-700">Add to Cart</button>
                    </div>
                </div>
            </div>

            {/* Repeat the above product card for other products */}
            {/* Product Card 2 */}
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://thumb.pccomponentes.com/w-530-530/articles/1072/10720246/1619-pccom-ready-intel-core-i5-13400f-16gb-500gb-ssd-rtx3060-negro.jpg" alt="Product 2" className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-indigo-600">Product 2</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="mt-4">
                        <span className="text-indigo-600 font-semibold">$79.99</span>
                        <button className="bg-indigo-600 text-white px-2 py-1 rounded-full float-right hover:bg-indigo-700">Add to Cart</button>
                    </div>
                </div>
            </div>
            
             {/* Product Card 2 */}
             <link rel="stylesheet" href="" />
             <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://thumb.pccomponentes.com/w-530-530/articles/1072/10720246/1619-pccom-ready-intel-core-i5-13400f-16gb-500gb-ssd-rtx3060-negro.jpg" alt="Product 2" className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-indigo-600">Product 2</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="mt-4">
                        <span className="text-indigo-600 font-semibold">$79.99</span>
                        <button className="bg-indigo-600 text-white px-2 py-1 rounded-full float-right hover:bg-indigo-700">Add to Cart</button>
                    </div>
                </div>
            </div>
             {/* Product Card 2 */}
             <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="data:image/jpeg;base64,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" alt="Product 2" className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-indigo-600">Product 2</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="mt-4">
                        <span className="text-indigo-600 font-semibold">$79.99</span>
                        <button className="bg-indigo-600 text-white px-2 py-1 rounded-full float-right hover:bg-indigo-700">Add to Cart</button>
                    </div>
                </div>
            </div>

            {/* Repeat the above product card for other products */}
        </div>
    </main>
    <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
            &copy; 2023 E-commerce Store. All rights reserved.
        </div>
    </footer>
     
        </body>
    </html>
  );
}
