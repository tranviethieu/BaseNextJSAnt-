import createAxiosClientCore from ".";


const axiosClientCore = createAxiosClientCore();

const crmPatientService = {
	createPatient: (
		data: {
			hisPatientCode: string;
			avatar: string;
			fullName: string;
			phoneNumber: string;
			email: string;
			nationIdentification: string;
			gender: string;
			birthDay: Date | null;
			nation: {
				code: string;
				name: string;
			} | null;
			work: {
				code: string;
				name: string;
			} | null;
			insuranceCode: string;
			nationality: {
				code: string;
				name: string;
			} | null;
			province: {
				code: string;
				name: string;
			} | null;
			district: {
				code: string;
				name: string;
			} | null;
			ward: {
				code: string;
				name: string;
			} | null;
			street: string;
		},
		tokenAxios?: any
	) => {
		return axiosClientCore.post(`/crm/patient/create`, data, {
			cancelToken: tokenAxios,
		});
	},
	updatePatient: (
		data: {
			_id: string;
			hisPatientCode: string;
			avatar: string;
			fullName: string;
			phoneNumber: string;
			email: string;
			nationIdentification: string;
			gender: string;
			birthDay: Date | null;
			nation: {
				code: string;
				name: string;
			} | null;
			work: {
				code: string;
				name: string;
			} | null;
			insuranceCode: string;
			nationality: {
				code: string;
				name: string;
			} | null;
			province: {
				code: string;
				name: string;
			} | null;
			district: {
				code: string;
				name: string;
			} | null;
			ward: {
				code: string;
				name: string;
			} | null;
			street: string;
		},
		tokenAxios?: any
	) => {
		return axiosClientCore.post(`/crm/patient/update`, data, {
			cancelToken: tokenAxios,
		});
	},
	getPatientByPatientId: (
		data: {
			patientId: string;
		},
		tokenAxios?: any
	) => {
		return axiosClientCore.post(`/crm/patient/${data.patientId}`, data, {
			cancelToken: tokenAxios,
		});
	},
	getListPatientFromHis: (
		data: {
			paging: {
				from: number;
				count: number;
			};
			hospitalId: string;
			keySearch: string;
			nation?: {
				code: string | null;
				name: string | null;
			} | null;
			province?: {
				code: string | null;
				name: string | null;
			} | null;
			district?: {
				code: string | null;
				name: string | null;
			} | null;
			ward?: {
				code: string | null;
				name: string | null;
			} | null;
			phoneNumber?: string | null;
			email?: string | null;
			birthYear?: number | null;
		},
		tokenAxios?: any
	) => {
		return axiosClientCore.post(`/crm/customer/list`, data, {
			cancelToken: tokenAxios,
		});
	},
};

export default crmPatientService;
