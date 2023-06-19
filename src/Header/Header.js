import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <h2>Amazon  Sales Business Requests</h2>

      <table>
        <tr>
          <th>Job Title</th>
          <th>Business Request</th>
          <th>User Value</th>
          <th>Acceptance Criteria</th>
        </tr>
        <tr>
          <td>Sales Manager</td>
          <td>To get a dashboard overview of Sales</td>
          <td>Can follow better which customers and products sells the best</td>
          <td></td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Product</td>
          <td>
            Can follow up my customers that buys the most and who we can sell
            ore to
          </td>
          <td>
            A Power BI dashboard which allows me to filter data for each Product
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Brand</td>
          <td>
            Can follow up my customers that buys the most and who we can sell
            ore to
          </td>
          <td>
            A Power BI dashboard which allows me to filter data for each Brand
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Department</td>
          <td>Can follow up my Department that sells the most</td>

          <td>
            A Power BI dashboard which allows me to filter data for each
            Department
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Category</td>
          <td>Can follow up my Department that sells the most</td>

          <td>
            A Power BI dashboard which allows me to filter data for each
            Category
          </td>
        </tr>
      </table>

      <h2>View the Dashboard in this  Section</h2>
      <table>
        <tr>
          <th>Page Routes </th>
          <th>Description of the Pages</th>
          <th>URL Links</th>
        </tr>
        <tr>
          <td>JPEG  Dashboard Data</td>
          <td>Image file containing the Sales Visualised Data</td>

          <td>
            <a
              href="https://github.com/JohnKimaiyo/Amazon-Data-Analys-React-App/blob/main/src/Publshed%20Report/Amazon%20Published%20Sales%20%20Summary.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Dashboard Here
            </a>
          </td>
        </tr>
        <tr>
          <td>Googlesheet Dashboard Data</td>
          <td>Image containing the Sales Visualised Data in Googlesheet</td>

          <td>
            <a
              href="https://docs.google.com/spreadsheets/d/1NUMDmKWTlq3EncH-UNsKGHsMRyRDDuurPC5hVhrZT3o/edit#gid=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Dashboard Here
            </a>
          </td>
        </tr>
        <tr>
          <td>PDF Dashboard Data</td>
          <td>PDF file containing the Sales Visualised Data</td>

          <td>
            <a
              href="https://github.com/JohnKimaiyo/Amazon-Data-Analys-React-App/blob/main/src/Publshed%20Report/Amazon%20Published%20Sales%20%20Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Dashboard Here
            </a>
          </td>
        </tr>
        <tr>
          <td>SQL Queries</td>
          <td>Checkout sql statement to clean up the data</td>
          <td>
            <a
              href="https://github.com/JohnKimaiyo/Amazon-Data-Analys-React-App/blob/main/src/SQL%20Queries/activedataset.sql"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to view the SQL scripts
            </a>
          </td>
        </tr>
        <tr>
          <td>Amazon Source Files </td>
          <td>Amazon Kaggle Dataset</td>
          <td>
            <a
              href="https://www.kaggle.com/datasets/promptcloud/amazon-product-dataset-2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to down load the source files from kaggle
            </a>
          </td>
        </tr>
        <tr>
          <td>Amazon JSON Files </td>
          <td>Amazon JSON Dataset</td>
          <td>
            <a
              href="https://raw.githubusercontent.com/JohnKimaiyo/Amazon-Data-Analys-React-App/main/src/JSON%20Files/amazon.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to down load the JSON file
            </a>
          </td>
        </tr>
        <tr>
          <td>Create JSON Files </td>
          <td>Check out my Excel to JSON Converter app</td>
          <td>
            <a
              href="https://excel-to-json-javascript-converter.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to convert Excel data to JSON Data
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}
