import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { mockData } from "../Search/mochResponses";
import { SearchItem } from "../interfaces";
import { filterByField, priceCompare } from "../shared/utils/utils";
import { Item, ItemText, Small } from "../Search/Results/Styles";
import { color } from "../shared/styles";
import ResultItemImage from "../Search/Results/ResultItemImage";
import { Icon, TrophyIcon } from "../components/Icon";
import { ToolbarButton } from "../components/Toolbar";
import { Toolbar } from "../components/Toolbar/Styles";

const Bookmarks = () => {
  const reponses: SearchItem[] = filterByField(mockData, "itemid");
  return (
    <Container>
      <div
        style={{
          background: "rgba(0,0,0, 0.3)",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Toolbar place='right-top'>
            Export to PDF
            <ToolbarButton name='Export to PDF' icon='Pdf' />
          </Toolbar>
          <table
            width='100%'
            style={{
              borderCollapse: "collapse",
              padding: "20px 0",
              marginTop: "10px",
              borderRadius: "10px",
              background: color.backgroundLightest,
            }}
          >
            <thead style={{ lineHeight: "40px" }}>
              <tr>
                <th>
                  <div
                    style={{
                      minWidth: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    <Icon type='Product' size={18} />
                    <span>Product</span>
                  </div>
                </th>
                <th>
                  <div
                    style={{
                      minWidth: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    <Icon type='Price' size={18} />
                    <span>Price</span>
                  </div>
                </th>
                <th>
                  <div
                    style={{
                      minWidth: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    <Icon type='Star' size={18} />
                    <span>Ratings</span>
                  </div>
                </th>
                <th>
                  <div
                    style={{
                      minWidth: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    <Icon type='Sales' size={18} />
                    <span>Sales</span>
                  </div>
                </th>
                <th>
                  <div
                    style={{
                      minWidth: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    <Icon type='Like' size={18} />
                    <span>Stars</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody style={{ whiteSpace: "nowrap", textAlign: "center" }}>
              {reponses.map((r, index) => {
                const types: ["gold", "silver", "bronze"] = [
                  "gold",
                  "silver",
                  "bronze",
                ];
                return (
                  <tr style={{ background: index ? "none" : "#dadada" }}>
                    <td
                      style={{
                        display: "flex",
                        marginLeft: "10px",
                      }}
                    >
                      <Item>
                        <ResultItemImage src={r.image} direction='left' />
                        <span
                          style={{
                            textAlign: "start",
                            fontSize: "14px",
                            marginLeft: "10px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "normal",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            width: "100%",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {r.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                        </span>
                      </Item>
                    </td>
                    <td style={{ whiteSpace: "nowrap" }}>
                      <TrophyIcon
                        type={
                          types[parseInt(((Math.random() * 10) / 4).toFixed())]
                        }
                        size={13}
                      />
                      {priceCompare({
                        price: r.price,
                        price_max: r.price_max,
                        price_min: r.price_min,
                      })}
                    </td>
                    <td>
                      <Flex align='center' justify='center' wrap='nowrap'>
                        <TrophyIcon
                          type={
                            types[
                              parseInt(((Math.random() * 10) / 4).toFixed())
                            ]
                          }
                          size={13}
                        />
                        <span>{r.item_rating.rating_star.toFixed(1)}</span>
                      </Flex>
                    </td>
                    <td>
                      <Flex align='center' justify='center' wrap='nowrap'>
                        <TrophyIcon
                          type={
                            types[
                              parseInt(((Math.random() * 10) / 4).toFixed())
                            ]
                          }
                          size={13}
                        />
                        <div>
                          {r.sold}
                          <Small on='compare'> sold/mon </Small>
                        </div>
                      </Flex>
                    </td>
                    <td>{r.liked_count}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Bookmarks;
