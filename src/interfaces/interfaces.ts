

export interface ISystemInterface {
    computer_name?: string;
    cpu_brand?: string;
    cpu_logical_cores?: string;
    cpu_physical_cores?: string;
    cpu_subtype?: string;
    cpu_type?: string;
    hardware_model?: string;
    hardware_serial?: string;
    hardware_vendor?: string;
    hardware_version?: string;
    hostname?: string;
    local_hostname?: string;
    physical_memory?: string;
    uuid?: string;
}

export interface ITemperatureInterface {
    name?: string;
    fahrenheit?: string;
    celsius?: string;
    key?: string;
}

export interface ITemperatureInterfaceItems extends Array<ITemperatureInterface> {
    
}