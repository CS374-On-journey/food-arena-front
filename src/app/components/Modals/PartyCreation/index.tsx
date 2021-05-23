import * as React from "react";
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import { IParty } from 'store/party/types';
import { selectRestaurantById } from 'store/place/selectors';
import { usePartySlice } from 'store/party/index';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  SIZE,
  ROLE
} from "baseui/modal";

import {
  Checkbox,
  LABEL_PLACEMENT
} from "baseui/checkbox";

import {
  ThemeProvider,
  createTheme,
  lightThemePrimitives
} from "baseui";

import {Block} from 'baseui/block';
import {Button, KIND} from 'baseui/button';
import {
  Label2,
} from 'baseui/typography';
import { Input } from "baseui/input";
import { FormControl } from 'baseui/form-control';
import { DatePicker } from "baseui/datepicker";
import { TimePicker } from 'baseui/timepicker';
import { useDispatch, useSelector } from "react-redux";

interface PhotoProps {
  image: string;
}

const NoticeTitle = styled.h3`
    display: flex;
    color: black;
    font-size: 1.0rem;
    font-weight: 700;
    margin: 0;
    color: #A8A8A8;
    text-align: left;
    & > svg {
      margin-right: 5px;
    }
`;

const BottomContent = styled.div`
    color: black;
    font-size: 18px;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-bottom: 10px;
    & > svg {
        margin-right: 10px;
    }
`;

export default function PartyCreation({
    restaurantId,
    isPartyCreationOn,
    setIsPartyCreationOn,
}) 
{
  const {actions} = usePartySlice();
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurantById(restaurantId));

  const [checked, setChecked] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [menu, setMenu] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [maxPeople, setMaxPeople] = React.useState('');
  const [meetingDate, setMeetingDate] = React.useState(new Date());
  const [dueDate, setDueDate] = React.useState(new Date());

  React.useEffect(() => {
    setChecked(false);
  }, [isPartyCreationOn])

  return (
    <Modal
      onClose={() => setIsPartyCreationOn(false)}
      closeable
      isOpen={isPartyCreationOn}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            zIndex: 500,
          })
        },
        Dialog: {
            style: ({ $theme }) => ({
              width: '60vw',
              maxWidth: '850px',
              borderRadius: '20px'
            })
        }
      }}
    >
      <ModalHeader className='fadeInUp'><b>Create New Party</b></ModalHeader>
      <ModalBody className='fadeInUp' style={{marginBottom: 0}}>

      <Block marginBottom="scale500" />
      <div style={{display: 'flex'}}>

          <div
            style={{
              width: '100%',
            }}
          >
          
      <Label2>Title</Label2>
      <Block marginBottom="scale200" />
      <Input
        value={title}
        onChange={e => setTitle(e.currentTarget.value)}
        placeholder="Title here.. ex. Only French Fries..."
        clearOnEscape
      />

      <div style={{display: 'flex'}}>

        <div
            style={{
              width: '50%',
              marginRight: '15px'
            }}
          >
            
      <Block marginBottom="scale500" />
      
            <FormControl label="Meeting Date" caption="YYYY-MM-DD">
            <DatePicker
              value={meetingDate}
              onChange={({date}) => setMeetingDate(date as Date)}
              formatString="yyyy-MM-dd"
              placeholder="yyyy-MM-dd"
              overrides={{
                Popover: {
                  props: {
                    overrides: {
                      Body: {
                        style: ({ $theme }) => ({
                          zIndex: 500
                        })
                      },
                      Inner: {
                        style: ({ $theme }) => ({
                          zIndex: 500
                      })
                    },
                  }
                }
              },
              MonthYearSelectPopover: {
                props: {
                  overrides: {
                    Body: {
                      style: ({ $theme }) => ({
                        zIndex: 500
                      })
                    },
                    Inner: {
                      style: ({ $theme }) => ({
                        zIndex: 500
                    })
                  },
                }
              }
            }
            }}
            />
            </FormControl>
          </div>
          <div
            style={{
              width: '50%'
            }}
          >
            <Block marginBottom="scale500" />
            <FormControl label="Meeting Start Time" caption="HH:MM">
              <TimePicker
                value={meetingDate}
                onChange={setMeetingDate}
                overrides={{
                  Select: {
                    props: {
                      overrides: {
                        Popover: {
                          props: {
                            overrides: {
                              Body: {
                                style: ({ $theme }) => ({
                                  zIndex: 500
                                })
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              />
            </FormControl>
          </div>
          </div>
          </div>
        </div>
        <Label2>What we eat</Label2>
        <Block marginBottom="scale200" />
        <Input
          value={menu}
          onChange={e => setMenu(e.currentTarget.value)}
          placeholder="Menu here..."
          clearOnEscape
        />
        <Block marginBottom="scale700" />
        <Label2>Short explanation</Label2>
        <Block marginBottom="scale200" />
        <Input
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
          placeholder="Short explanation of this party"
          clearOnEscape
        />
        <Block marginBottom="scale800" />
        <div style={{display: 'flex'}}>
          <div
            style={{
              width: '30%',
              marginRight: '15px'
            }}
          >
            <Block marginBottom="scale200" />
            <Label2>Max People</Label2>
            <Block marginBottom="scale200" />
            <Input
              value={maxPeople}
              onChange={e => setMaxPeople(e.currentTarget.value)}
              placeholder="Only number here..."
              clearOnEscape
            />
          </div>
          <div
            style={{
              width: '70%'
            }}
          >
            <div style={{display: 'flex'}}>
          <div
            style={{
              width: '50%',
              marginRight: '15px'
            }}
          >
            <FormControl label="Registeraion Due Date" caption="YYYY-MM-DD">
            <DatePicker
              value={meetingDate}
              onChange={({date}) => setMeetingDate(date as Date)}
              formatString="yyyy-MM-dd"
              placeholder="yyyy-MM-dd"
              overrides={{
                Popover: {
                  props: {
                    overrides: {
                      Body: {
                        style: ({ $theme }) => ({
                          zIndex: 500
                        })
                      },
                      Inner: {
                        style: ({ $theme }) => ({
                          zIndex: 500
                      })
                    },
                  }
                }
              },
              MonthYearSelectPopover: {
                props: {
                  overrides: {
                    Body: {
                      style: ({ $theme }) => ({
                        zIndex: 500
                      })
                    },
                    Inner: {
                      style: ({ $theme }) => ({
                        zIndex: 500
                    })
                  },
                }
              }
            }
            }}
            />
            </FormControl>
          </div>
          <div
            style={{
              width: '50%'
            }}
          >
            <FormControl label="Registeraion Due Time" caption="HH:MM">
              <TimePicker
                value={meetingDate}
                onChange={setMeetingDate}
                overrides={{
                  Select: {
                    props: {
                      overrides: {
                        Popover: {
                          props: {
                            overrides: {
                              Body: {
                                style: ({ $theme }) => ({
                                  zIndex: 500
                                })
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }}
              />
            </FormControl>
          </div>
        </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter className='fadeInUp' style={{display: 'flex', justifyContent:'space-between', marginTop: '0px', paddingTop: '5px'}}>
        <NoticeTitle>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="#A8A8A8"/>
          </svg>
          <div>
            IMPORTANT NOTICES<br/>
            <span style={{lineHeight: '24px'}}>- notice 1</span><br/>
            <span style={{lineHeight: '24px'}}>- notice 2</span><br/>
            <span style={{lineHeight: '24px'}}>- notice 3</span><br/>
          </div>
          </NoticeTitle>
        <div>
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          labelPlacement={LABEL_PLACEMENT.right}
        >
          I agree all of the Important notices
        </Checkbox>
        <Block marginBottom="scale300" />
        <Button
          kind={KIND.secondary}
          onClick={() => setIsPartyCreationOn(false)}
        >Back
        </Button>
        <span style={{marginLeft: '10px'}}/>
        <ThemeProvider
          theme={createTheme(lightThemePrimitives, {
            colors: {
              buttonPrimaryFill: "#FF3061",
              buttonPrimaryHover: "#cc1132"
            }
          })}
        >
        <Button 
          kind={KIND.primary}
          disabled={!checked}
          onClick={() => {
            let count = Number.parseInt(maxPeople);
            if(count > 8){
              Swal.fire('Maximum people must be less than or equal to 8 people')
              return
            }
            if(count < 2){
              Swal.fire('Maxium people must be more than 1. If you want to eat alone, how about to use navigation feature?')
              return;
            }
            const isNull = x=>x==null||x==undefined||x==''||x==0||((x instanceof String) && (x as string).trim().length <= 0);
            if(isNull(description)){
              Swal.fire('Please fill up "Short explanation"')
              return
            }
            if(isNull(menu)){
              Swal.fire('Please fill up "What we eat"')
              return
            }
            if(isNull(title)){
              Swal.fire('Please fill up "Title"')
              return
            }
            if(isNull(maxPeople)){
              Swal.fire('Please check the "Max People"')
              return
            }
            if(isNull(count)){
              Swal.fire('Please check the "Max People"')
              return
            }

            dispatch(actions.createParty({
              ban_rules: ['a', 'b', 'c'],
              description: description,
              due_date: dueDate.toLocaleString(),
              id: 1,
              is_registered: true,
              max_people: count,
              meeting_date: meetingDate.toLocaleString(),
              menu_text: menu,
              registered_people: 1,
              restaurant_id: restaurantId, 
              tags: restaurant ? restaurant?.tags : [],
              title: title,
            }))
            setIsPartyCreationOn(false)
          }}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                backgroundColor: '#FF3061'
              })
            }
          }}
          >Open Party</Button>
        </ThemeProvider>
        <Block marginBottom="scale600" />
        </div>
      </ModalFooter>
    </Modal>
  );
}