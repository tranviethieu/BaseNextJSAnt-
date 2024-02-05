import {useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Button, Modal, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Radio, Select, Slider, Switch, TreeSelect, Upload} from 'antd';
function ModelCustom() {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setOpen(false);
		}, 3000);
	};

	const handleCancel = () => {
		setOpen(false);
	};
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};
	return (
		<>
			<Button type='primary' onClick={showModal}>
				Open Modal with customized footer
			</Button>
			<Modal
				open={open}
				title='Title'
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key='back' onClick={handleCancel}>
						Return
					</Button>,
					<Button key='submit' type='primary' loading={loading} onClick={handleOk}>
						Submit
					</Button>,
					<Button key='link' href='https://google.com' type='primary' loading={loading} onClick={handleOk}>
						Search on Google
					</Button>,
				]}
			>
				{/* <p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p> */}
				<Form onFinish={onFinish} labelCol={{span: 4}} wrapperCol={{span: 14}} layout='horizontal' style={{maxWidth: 600}}>
					<Form.Item label='TreeSelect'>
						<TreeSelect treeData={[{title: 'Light', value: 'light', children: [{title: 'Bamboo', value: 'bamboo'}]}]} />{' '}
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}

export default ModelCustom;
