package com.bank.server.controller;

import com.bank.server.dto.EmployerRequestDto;
import com.bank.server.dto.EmployerRequestPutDto;
import com.bank.server.dto.EmployerResponseDto;
import com.bank.server.entity.Employer;
import com.bank.server.mapper.EmployerRequestDtoMapper;
import com.bank.server.mapper.EmployerRequestPutDtoMapper;
import com.bank.server.mapper.EmployerResponseDtoMapper;
import com.bank.server.service.EmployerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/employers")
public class EmployerController {

    private final EmployerService employerService;
    private final EmployerResponseDtoMapper employerResponseDtoMapper;
    private final EmployerRequestDtoMapper employerRequestDtoMapper;
    private final EmployerRequestPutDtoMapper employerRequestPutDtoMapper;

    @GetMapping
    public List<EmployerResponseDto> findAll() {
        return employerService.findAll().stream()
                .map(employerResponseDtoMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public Optional<EmployerResponseDto> findById(
            @PathVariable(name = "id") Long id
    ) {
        return employerService.findById(id)
                .map(employerResponseDtoMapper::convertToDto);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable(name = "id") Long id) {
        employerService.deleteById(id);
    }

    @PostMapping
    public Employer create(
            @Valid
            @RequestBody EmployerRequestDto employerRequestDto
    ) {
        Employer employer = employerRequestDtoMapper.convertToEntity(employerRequestDto);
        return employerService.create(employer);
    }

    @PutMapping
    public Employer update(
            @Valid
            @RequestBody EmployerRequestPutDto employerRequestDto
    ) {
        Employer employer = employerRequestPutDtoMapper.convertToEntity(employerRequestDto);
        return employerService.update(employer);
    }
}
