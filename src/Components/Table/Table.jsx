import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
import { useApi } from '../../hooks/useApi';

//const data = useApi();

const Tabla = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Buscar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Limpiar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filtrar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Cerrar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Película',
      dataIndex: 'image',
      key: 'image',
      width: '30%',
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {' '}
          <img
            src={text}
            alt="Movie Poster"
            style={{ maxWidth: '50px', maxHeight: '50px' }}
          />
        </a>
      ),
    },
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      width: '25%',
      ...getColumnSearchProps('title'),
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Año',
      dataIndex: 'year',
      key: 'year',
      width: '25%',
      ...getColumnSearchProps('year'),
      sorter: (a, b) => a.year.length - b.year.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
      width: '20%',
      ...getColumnSearchProps('type'),
      sorter: (a, b) => a.type.length - b.type.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={useApi()}
      size="small"
      pagination={{
        pageSize: 5,
      }}
      scroll={{
        x: 1500,
        y: 240,
      }}
    />
  );
};
export default Tabla;
