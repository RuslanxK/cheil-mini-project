<h1>Task Overview</h1>

<p>I have successfully implemented all the required features along with additional functionality beyond the initial requirements.</p>

<h3>Backend:</h3>
<ul>
  <li>Created an <strong>Express.js</strong> server with full <strong>CRUD operations</strong> (Create, Read, Update, Delete) via RESTful API endpoints.</li>
</ul>

<h3>Frontend:</h3>
<ul>
  <li>Replaced mock data with <strong>real data</strong> from the backend.</li>
  <li>Added full <strong>CRUD functionality</strong> (create, update, delete) to manage products.</li>
  <li>Built <strong>reusable and maintainable components</strong> for easy scalability.</li>
  <li>Styled with <strong>Tailwind CSS</strong> for a modern design.</li>
  <li>Fully <strong>responsive</strong> for mobile and tablet devices.</li>
</ul>

<h3>Getting Started:</h3>
<ol>
  <li>Clone the repository.</li>
  <li>To access the backend, navigate to the <strong>be</strong> folder and run <code>npm i</code> to install dependencies.</li>
  <li>Add a <code>.env</code> file with the following content to configure the local MongoDB database:
    <br><code>MONGO_URI=mongodb://localhost:27017/cheilProjectDB</code>
  </li>
  <li>To run the backend, navigate to the <strong>be</strong> folder and run <code>npm run dev</code> in the terminal.</li>
  <li>To access the frontend, navigate to the <strong>fe</strong> folder, run <code>npm i</code> to install dependencies, and add a <code>.env</code> file with this content:
    <br><code>VITE_API_URL=http://localhost:8000/api</code>
  </li>
  <li>To run the frontend, navigate to the <strong>fe</strong> folder and run <code>npm run dev</code> in the terminal.</li>
  <li>The application will now fetch and display real product data with full CRUD functionality.</li>
</ol>
