export interface Case {
  id: string,
  name: string,
  form_factor: string,
  dimension_type: string,
  water_cooling_system: string,
  cpu_cooller_maximum_height: string,
  gpu_maximum_length: string,
  overall_dimensions: string,
  front_panel_connectors: string,
  price: string
}

export interface Cooller {
  id: string,
  name: string,
  radiator_material: string,
  cooller_height: string,
  rotation_speed: string,
  airflow: string,
  noise_level: string,
  bearing_type: string,
  light: string,
  uptime: string,
  weght: string,
  waterblock_material: string,
  price: string
}

export interface Cpu {
  id: string,
  name: string,
  L3_cache: string,
  socket: string,
  processor_cores: string,
  core_speed: string,
  core: string,
  price: string
}

export interface Gpu {
  id: string,
  name: string,
  memory: string,
  memory_type: string,
  psu: string,
  rgb: string,
  year: string,
  price: string
}

export interface HardDisc {
  id: string,
  name: string,
  type: string,
  memory: string,
  buffered_memory: string,
  conection: string,
  price: string
}

export interface MotherBoard {
  id: string,
  name: string,
  form_factor: string,
  slots: string,
  chipset: string,
  sound: string,
  socket: string,
  expansion_slots: string,
  slots_types: string,
  price: string
}

export interface Psu {
  id: string,
  name: string,
  power : string,
  form_factor: string,
  protection_technology: string,
  cooling_system: string,
  maximum_noise_level: string,
  pfc: string,
  price: string
}

export interface  Ssd {
  id: string,
  name: string,
  memory: string,
  form_factor: string,
  connector_M: string,
  flash_memory_type: string,
  interface_max_speed: string,
  reading_speed: string,
  recording_speed: string,
  price: string
}

export interface Ram {
  id: string,
  name: string,
  form_factor: string,
  memory_type: string,
  clock_rate: string,
  throughput: string,
  supply_voltage: string,
  price: string
}

