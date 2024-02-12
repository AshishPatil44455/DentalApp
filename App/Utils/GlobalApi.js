import { request, gql } from "graphql-request";

const Master_URL =
  "https://api-ap-south-1.hygraph.com/v2/clsgnoze723c001upz3mkihd6/master";

const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(Master_URL, query);
  return result;
};

const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(Master_URL, query);
  return result;
};

const getBusinessList = async () => {
  const query = gql`
    query getBusinessList {
      businessLists {
        id
        name
        category {
          name
        }
        about
        images {
          url
        }
      }
    }
  `;
  const result = await request(Master_URL, query);
  return result;
};

export default { getSlider, getCategories, getBusinessList };
